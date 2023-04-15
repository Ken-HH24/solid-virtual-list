import SolidVirtualList from '@kenh24/solid-virtual-list';

const FixedSizePage = () => {
  const dataSource = new Array(1000).fill(0).map((_, index) => ({ id: index }));

  return (
    <div class="flex flex-col items-center text-slate-800">
      <div class="min-w-[800px] py-6">
        <div class="text-2xl mb-4">Fixed Size Virtual List</div>

        <div class="w-full h-[600px] border-[1px] border-gray-900 rounded-md">
          <SolidVirtualList
            estimateSize={60}
            dataSource={dataSource}
            dataId={'id'}
            itemRender={(index) => (
              <div class="h-[60px] w-full px-[10px] flex items-center border-b-[1px] border-gray-900  text-gray-900 box-border">
                # {index}
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default FixedSizePage;
