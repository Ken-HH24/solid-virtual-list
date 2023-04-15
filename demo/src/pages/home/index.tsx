const HomePage = () => {
  return (
    <div class="flex flex-col items-center">
      <div class="min-w-[800px] py-6">
        <div class="text-3xl mb-6 font-semibold">Introduction</div>
        <div class="w-full leading-8 text-lg">
          <div>
            <span>A simple virtual list built for Solid-js.</span> <br />
            <span>
              {'Inspired by '}
              <a class="text-blue-500 cursor-pointer" href="https://github.com/tangbc/vue-virtual-scroll-list">
                https://github.com/tangbc/vue-virtual-scroll-list
              </a>
            </span>
          </div>
          <div class="mt-4">
            <span>Currently supports</span> <br />
            <span>• Fixed size</span>
            <br />
            <span>• Dynamic size</span>
            <br />
            <span>• Fixed header and footer slot</span>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
