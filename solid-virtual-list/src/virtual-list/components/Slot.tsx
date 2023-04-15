import { Component as SolidComponent, onCleanup, onMount } from 'solid-js';
import type { SlotConfig, SlotType } from '../types';

import styles from '../styles/style.module.css';

export interface VirtualListSlotProps {
  type: SlotType;
  config: SlotConfig;
  isHorizontal: boolean;
  onSlotSizeChange: (type: SlotType, size: number) => void;
}

export const VirtualListSlot: SolidComponent<VirtualListSlotProps> = (props) => {
  let ref: HTMLDivElement | undefined;
  let resizeObserver: ResizeObserver | undefined;

  onMount(() => {
    resizeObserver = new ResizeObserver(() => {
      props.onSlotSizeChange(props.type, (props.isHorizontal ? ref?.offsetWidth : ref?.offsetHeight) || 0);
    });

    ref && resizeObserver.observe(ref);
  });

  onCleanup(() => {
    resizeObserver?.disconnect();
  });

  return (
    <div
      ref={ref}
      class={`${props.type === 'header' ? styles.headerSlot : styles.footerSlot} ${props.config.className || ''}`}
      style={props.config.style}
    >
      {props.config.render()}
    </div>
  );
};
