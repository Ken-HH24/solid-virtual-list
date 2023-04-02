import { Component as SolidComponent, JSX, onCleanup, onMount } from 'solid-js';

export interface VirtualListItemProps {
  id: string;
  isHorizontal: boolean;
  children: JSX.Element;
  onSizeChange: (id: string, size: number) => void;
}

const VirtualListItem: SolidComponent<VirtualListItemProps> = (props) => {
  let ref: HTMLDivElement | undefined;
  let resizeObserver: ResizeObserver | undefined;

  onMount(() => {
    resizeObserver = new ResizeObserver(() => {
      props.onSizeChange(props.id, (props.isHorizontal ? ref?.offsetWidth : ref?.offsetHeight) || 0);
    });

    ref && resizeObserver.observe(ref);
  });

  onCleanup(() => {
    resizeObserver?.disconnect();
  });

  return <div ref={ref}>{props.children}</div>;
};

export default VirtualListItem;
