import { CALC_TYPE, VirtualParams, VirtualRange, virtualRangeCallback } from './types';
import { SCROLL_DIRECTION } from './types';

export class Virtual {
  params: VirtualParams = {
    offset: 0,
    keeps: 30,
    buffer: 10,
    estimateSize: 50,
    uniqueIds: [],
  };

  sizesMap = new Map<string, number>();
  fixedSizeValue = Infinity;
  firstRangeTotalSize: number | undefined = 0;
  firstRangeAverageSize = 0;
  calcType = CALC_TYPE.INIT;
  direction = SCROLL_DIRECTION.BEHIND;
  fn: virtualRangeCallback = () => {};

  range: VirtualRange = {
    start: 0,
    end: 0,
    paddingFront: 0,
    paddingBehind: 0,
  };

  constructor(params: VirtualParams, fn: virtualRangeCallback) {
    this.params = params;
    this.fn = fn;

    this.initState();
  }

  private initState() {
    this.sizesMap = new Map();
    this.calcType = CALC_TYPE.INIT;
    this.direction = SCROLL_DIRECTION.BEHIND;

    this.fixedSizeValue = Infinity;
    this.firstRangeTotalSize = 0;
    this.firstRangeAverageSize = 0;
  }

  forceUpdate(offset: number) {
    this.params.offset = offset;

    const overs = this.getScrollOvers();

    this.updateRange(overs, this.getEndByStart(overs));
  }

  handleScroll(offset: number) {
    this.direction = offset >= this.params.offset ? SCROLL_DIRECTION.BEHIND : SCROLL_DIRECTION.FRONT;

    this.params.offset = offset;

    this.direction === SCROLL_DIRECTION.BEHIND ? this.handleScrollBehind() : this.handleScrollFront();
  }

  handleScrollBehind() {
    const overs = this.getScrollOvers();

    if (overs < this.range.start + this.params.buffer) {
      return;
    }

    this.checkRange(overs, this.getEndByStart(overs));
  }

  handleScrollFront() {
    const overs = this.getScrollOvers();

    if (overs > this.range.start) {
      return;
    }

    const start = Math.max(overs - this.params.buffer, 0);
    this.checkRange(start, this.getEndByStart(start));
  }

  checkRange(start: number, end: number) {
    const totalCount = this.getTotalCount();
    const keeps = this.params.keeps;

    if (totalCount <= keeps) {
      start = 0;
      end = totalCount;
    } else if (end - start < keeps) {
      start = end - keeps;
    }

    if (this.range.start !== start) {
      this.updateRange(start, end);
    }
  }

  updateRange(start: number, end: number) {
    this.range.start = start;
    this.range.end = end;

    this.range.paddingFront = this.getPaddingFront();
    this.range.paddingBehind = this.getPaddingBehind();

    this.fn(this.range);
  }

  getPaddingFront() {
    if (this.isFixedSize()) {
      return this.range.start * this.params.estimateSize;
    } else {
      return this.getOffsetByIndex(this.range.start);
    }
  }

  getPaddingBehind() {
    if (this.isFixedSize()) {
      return (this.getTotalCount() - this.range.end) * this.params.estimateSize;
    } else {
      return this.getOffsetByIndex(this.getTotalCount()) - this.getOffsetByIndex(this.range.end);
    }
  }

  getOffsetByIndex(index: number) {
    let offset = 0;
    for (let i = 0; i < index; i++) {
      const indexOffset = this.sizesMap.get(this.params.uniqueIds[i]);
      offset += typeof indexOffset === 'undefined' ? this.getEstimateSize() : indexOffset;
    }

    return offset;
  }

  saveSize(id: string, size: number) {
    this.sizesMap.set(id, size);

    if (this.calcType === CALC_TYPE.INIT) {
      this.fixedSizeValue = size;
      this.calcType = CALC_TYPE.FIXED;
    } else if (this.calcType === CALC_TYPE.FIXED && this.fixedSizeValue !== size) {
      this.fixedSizeValue = Infinity;
      this.calcType = CALC_TYPE.DYNAMIC;
    }

    if (this.calcType !== CALC_TYPE.FIXED && this.firstRangeTotalSize !== undefined) {
      if (this.sizesMap.size < Math.min(this.params.keeps, this.getTotalCount())) {
        this.firstRangeTotalSize = [...this.sizesMap.values()].reduce((prev, current) => prev + current, 0);
        this.firstRangeAverageSize = Math.round(this.firstRangeTotalSize / this.sizesMap.size);
      } else {
        this.firstRangeTotalSize = undefined;
      }
    }
  }

  updateUniqueIds(ids: string[]) {
    this.params.uniqueIds = ids;
    for (const id of this.sizesMap.keys()) {
      if (!ids.includes(id)) {
        this.sizesMap.delete(id);
      }
    }
  }

  private isFixedSize() {
    return this.calcType === CALC_TYPE.FIXED;
  }

  private getEndByStart(start: number) {
    const theoryEnd = start + this.params.keeps;
    const actualEnd = Math.min(theoryEnd, this.getTotalCount());
    return actualEnd;
  }

  private getScrollOvers() {
    const { offset, estimateSize } = this.params;

    if (offset <= 0) {
      return 0;
    }

    if (this.isFixedSize()) {
      return Math.floor(offset / estimateSize);
    }

    let low = 0;
    let high = this.getTotalCount();

    while (low <= high) {
      const mid = Math.floor((high + low) / 2);
      const middleOffset = this.getOffsetByIndex(mid);

      if (middleOffset === offset) {
        return mid;
      } else if (middleOffset < offset) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return Math.max(low - 1, 0);
  }

  private getTotalCount() {
    return this.params.uniqueIds.length;
  }

  private getEstimateSize() {
    return this.isFixedSize() ? this.params.estimateSize : this.firstRangeAverageSize || this.params.estimateSize;
  }
}
