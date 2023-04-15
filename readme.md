# Solid Virtual List

- A simple virtual list built for Solid-js.
- Inspired by https://github.com/tangbc/vue-virtual-scroll-list

## install

```
npm i @kenh24/solid-virtual-list
```

## Props

| prop         | type                   | description                                    | defaultValue |
| ------------ | ---------------------- | ---------------------------------------------- | ------------ |
| dataSource\* | Array                  | your data for rendering                        |
| dataId\*     | ()=> string \| string  | unique id for every data item                  |
| itemRender\* | () => JSX.Element      | the function to render item in virtual list    |
| estimateSize | number                 | the estimateSize of every item in virtual list | 50           |
| keeps        | number                 | the count for rendering in the virtual list    | 30           |
| direction    | vertical \| horizental | the scroll direction of virtual list           | vertical     |
| header       | SlotConfig             | to render a header slot                        | undefined    |
| footer       | SlotConfig             | to render a footer slot                        | undefined    |

### SlotConfig

| prop      | type              | description                     | defaultValue |
| --------- | ----------------- | ------------------------------- | ------------ |
| render\*  | () => JSX.Element | the function to render slot     |              |
| className | string            | className of the slot container | undefined    |
| style     | JSX.CSSProperties | style of the slot container     | undefined    |

## Fixed Size example

- Pass data, render Function and estimateSize to the component.

```tsx
import SolidVirtualList from "solid-virtual-list";

const FixedSizeComponent = () => {
  const dataSource = new Array(1000).fill(0).map((_, index) => ({ id: index }));

  return (
    <div style={{ overflow: "auto", height: "600px", width: "100%" }}>
      <SolidVirtualList
        estimateSize={60}
        dataSource={dataSource}
        dataId={"id"}
        itemRender={(index) => <div># {index}</div>}
      />
    </div>
  );
};

export default FixedSizePage;
```

## Dynamic Size example

- The virtual list use ResizeObserver to detect every item's size.
- You don't need to pass extra attribute to the component when every item has different size.

```tsx
import { createSignal } from "solid-js";
import SolidVirtualList from "solid-virtual-list";

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
    <div style={{ overflow: "auto", height: "600px", width: "100%" }}>
      <SolidVirtualList<Data>
        estimateSize={80}
        dataSource={dataSource()}
        dataId={"id"}
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
    </div>
  );
};

export default DynamicSizePage;
```

## Slot example

- You can use header and footer slot in the virtual list.

```tsx
import SolidVirtualList from "@kenh24/solid-virtual-list";

const SlotPage = () => {
  const dataSource = new Array(1000).fill(0).map((_, index) => ({ id: index }));

  return (
    <SolidVirtualList
      header={{
        render: () => <div>Header</div>,
      }}
      footer={{
        render: () => <div>Footer</div>,
      }}
      estimateSize={80}
      dataSource={dataSource}
      dataId={"id"}
      itemRender={(index) => <div># {index}</div>}
    />
  );
};

export default SlotPage;
```

## How to run the project

```shell
pnpm install
pnpm run watch
pnpm run demo
```

## Roadmap

- [x] header and footer slot
- [ ] demo website
- [ ] page mode
