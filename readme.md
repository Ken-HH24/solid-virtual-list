# Solid Virtual List

A virtual list built for Solid-js.

## Props
| props | function | value |
|---|---|---|
| dataSource | your data for rendering | required |
| dataId | unique id for every data item | required |
| itemRender | the function to render item in virtual list | required |
| estimateSize | the estimateSize of every item in virtual list | 50 |
| direction | the scroll direction of virtual list | vertical |
| keeps | the count for rendering in the virtual list | 30 |


## Fixed Size example

- Pass data, render Function and estimateSize to the component.

```tsx
import SolidVirtualList from 'solid-virtual-list';

const FixedSizeComponent = () => {
  const dataSource = new Array(1000).fill(0).map((_, index) => ({ id: index }));

  return <SolidVirtualList estimateSize={60} dataSource={dataSource} dataId={'id'} itemRender={(index) => <div># {index}</div>} />;
};

export default FixedSizePage;
```

## Dynamic Size example

- The virtual list use ResizeObserver to detect every item's size, so you don't need to pass extra attribute to the component when every item has different size.

```tsx
import { createSignal } from 'solid-js';
import SolidVirtualList from 'solid-virtual-list';

interface Data {
  id: string;
  height: string;
}

const generateDataSource = (count: number) => {
  return new Array<Data>(count).fill({} as Data).map((_, index) => ({
    id: `${index}-${Math.random()}`,
    height: `${Math.floor(Math.random() * 60 + 60)}px`,
  }));
};

const DynamicSizePage = () => {
  const [dataSource] = createSignal<Data[]>(generateDataSource(1000000));

  return (
    <SolidVirtualList<Data>
      estimateSize={80}
      dataSource={dataSource()}
      dataId={'id'}
      itemRender={(index, data) => {
        const height = data.height;

        return (
          <div style={{ height }}>
            <span># {index}</span>
            <span>height = {height}</span>
          </div>
        );
      }}
    />
  );
};

export default DynamicSizePage;
```
