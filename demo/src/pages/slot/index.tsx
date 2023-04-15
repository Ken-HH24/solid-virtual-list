import SolidVirtualList from '@kenh24/solid-virtual-list';

const SlotPage = () => {
  const dataSource = new Array(1000).fill(0).map((_, index) => ({ id: index }));

  return (
    <div class="flex flex-col items-center">
      <div class="min-w-[800px] py-6">
        <div class="text-2xl mb-4">Virtual List with Slot</div>
        <div class="w-full h-[600px] overflow-hidden border-gray-900 text-gray-950 border-[1px] rounded-md">
          <SolidVirtualList
            header={{
              render: () => (
                <div class="h-[60px] w-full px-[10px] flex items-center border-b-[1px] border-gray-900 box-border bg-white">Header</div>
              ),
            }}
            footer={{
              render: () => (
                <div class="h-[60px] w-full px-[10px] flex items-center border-t-[1px] border-gray-900 box-border bg-white">Footer</div>
              ),
            }}
            estimateSize={80}
            dataSource={dataSource}
            dataId={'id'}
            itemRender={(index) => (
              <div class="h-[80px] w-full px-[10px] flex items-center border-b-[1px] border-gray-900 text-gray-950 box-border">
                # {index}
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default SlotPage;
