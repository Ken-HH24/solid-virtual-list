import { createSignal } from 'solid-js';
import SolidVirtualList from '@kenh24/solid-virtual-list';

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

const dataSource = generateDataSource(10000);

const DynamicSizePage = () => {
  return (
    <div class="flex flex-col items-center">
      <div class="min-w-[800px] py-6">
        <div class="text-2xl mb-4">Dynamic Size Virtual List</div>
        <div class="w-full h-[600px]  border-gray-900 text-gray-900 border-[1px] rounded-md">
          <SolidVirtualList<Data>
            estimateSize={80}
            dataSource={dataSource}
            dataId={'id'}
            itemRender={(index, data) => {
              const height = data.height;

              return (
                <div class="h-[60px] w-full px-[10px] flex items-center border-b-[1px] border-gray-900  box-border" style={{ height }}>
                  <span># {index}</span>
                  <span class="ml-4 font-semibold text-gray-900">height = {height}</span>
                </div>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DynamicSizePage;
