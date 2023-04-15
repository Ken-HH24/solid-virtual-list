import { batch, createEffect, createMemo, createSignal, For, JSX, mergeProps, onMount } from 'solid-js';
import { VirtualListItem, VirtualListSlot } from './components';
import { Virtual } from './virtual';
import type { Direction, SlotConfig } from './types';
import styles from './styles/style.module.css';
import { DEFAULT_PROPS, SLOT_ID } from './consts';

export interface SolidVirtualListProps<T = unknown> {
  dataSource: T[];
  dataId: string | ((data: T) => string);
  itemRender: (index: number, data: T) => JSX.Element;

  estimateSize?: number;
  direction?: Direction;
  keeps?: number;

  header?: SlotConfig;
  footer?: SlotConfig;
}

const SolidVirtualList = <T,>(props: SolidVirtualListProps<T>) => {
  const mergedProps = mergeProps(DEFAULT_PROPS, props);

  const [ref, setRef] = createSignal<HTMLDivElement>();

  const [start, setStart] = createSignal(0);
  const [end, setEnd] = createSignal(0);
  const [paddingFront, setPaddingFront] = createSignal(0);
  const [paddingBehind, setPaddingBehind] = createSignal(0);

  const isHorizontal = createMemo(() => mergedProps.direction === 'horizontal');
  const rendered = createMemo(() => mergedProps.dataSource.slice(start(), end()));
  const dataSourceIds = createMemo(() => {
    const dataId = mergedProps.dataId;
    const dataSource = mergedProps.dataSource;

    return dataSource.map((data) => (typeof dataId === 'function' ? dataId(data) : (data as any)?.[dataId]));
  });

  onMount(() => {
    virtual.forceUpdate((isHorizontal() ? ref()?.scrollLeft : ref()?.scrollTop) || 0);
  });

  createEffect(() => {
    const newDataSourceIds = dataSourceIds();
    virtual.updateUniqueIds(newDataSourceIds);
  });

  const virtual = new Virtual(
    {
      offset: 0,
      keeps: mergedProps.keeps,
      buffer: mergedProps.keeps / 3,
      estimateSize: mergedProps.estimateSize,
      uniqueIds: dataSourceIds(),
    },
    (range) => {
      batch(() => {
        setStart(range.start);
        setEnd(range.end);
        setPaddingFront(range.paddingFront);
        setPaddingBehind(range.paddingBehind);
      });
    }
  );

  const handleScroll = () => {
    const offset = (isHorizontal() ? ref()?.scrollLeft : ref()?.scrollTop) || 0;

    virtual.handleScroll(offset);
  };

  return (
    <div
      ref={setRef}
      onScroll={handleScroll}
      classList={{ [styles['virtual-scroll-list-container']]: true, [styles['horizontal']]: isHorizontal() }}
    >
      <div
        classList={{ [styles['horizontal']]: isHorizontal() }}
        style={{
          padding: isHorizontal() ? `0px ${paddingBehind()}px 0px ${paddingFront()}px` : `${paddingFront()}px 0px ${paddingBehind()}px 0px`,
        }}
      >
        {mergedProps.header && (
          <VirtualListSlot
            type="header"
            config={mergedProps.header}
            isHorizontal={isHorizontal()}
            onSlotSizeChange={virtual.updateSlotSize.bind(virtual)}
          />
        )}

        <For each={rendered()} fallback={null}>
          {(_, index) => {
            const renderedIndex = index() + start();

            const data = mergedProps.dataSource[renderedIndex];
            const dataId = dataSourceIds()[renderedIndex];

            return (
              <VirtualListItem id={dataId} isHorizontal={isHorizontal()} onSizeChange={virtual.saveSize.bind(virtual)}>
                {mergedProps.itemRender(renderedIndex, data)}
              </VirtualListItem>
            );
          }}
        </For>

        {mergedProps.footer && (
          <VirtualListSlot
            type="footer"
            config={mergedProps.footer}
            isHorizontal={isHorizontal()}
            onSlotSizeChange={virtual.updateSlotSize.bind(virtual)}
          />
        )}
      </div>
    </div>
  );
};

export default SolidVirtualList;
