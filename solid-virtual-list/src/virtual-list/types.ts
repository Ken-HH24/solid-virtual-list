import { JSX } from 'solid-js/jsx-runtime';

export type SlotType = 'header' | 'footer';

export type SlotConfig = {
  render: () => JSX.Element;
  style?: JSX.CSSProperties;
  className?: string;
};

export type VirtualParams = {
  offset: number;
  keeps: number;
  buffer: number;
  estimateSize: number;
  uniqueIds: string[];
};

export type VirtualRange = {
  start: number;
  end: number;
  paddingFront: number;
  paddingBehind: number;
};

export type virtualRangeCallback = (range: VirtualRange) => void;

export type Direction = 'horizontal' | 'vertical';

export enum SCROLL_DIRECTION {
  FRONT = 'FRONT',
  BEHIND = 'BEHIND',
}

export enum CALC_TYPE {
  INIT = 'INIT',
  FIXED = 'FIXED',
  DYNAMIC = 'DYNAMIC',
}
