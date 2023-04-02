import { Component as SolidComponent, For, lazy } from 'solid-js';
import { A, Route, Routes } from '@solidjs/router';
import HomePage from './pages/home';

const FixedSizePage = lazy(() => import('./pages/fixed'));
const DynamicSizePage = lazy(() => import('./pages/dynamic'));

const routes = [
  { name: 'Home', href: '/' },
  { name: 'Fixed Size', href: '/fixed' },
  { name: 'Dynamic Size', href: '/dynamic' },
];

const App: SolidComponent = () => {
  return (
    <div class="h-screen flex flex-col">
      <header class="h-[56px] bg-white px-[16px] flex items-center border-b-[1px] border-black">
        <For each={routes} fallback={null}>
          {(item) => (
            <A href={item.href} activeClass="text-blue-500" class="text-xl mr-[24px] hover:to-blue-500" end={true}>
              {item.name}
            </A>
          )}
        </For>
      </header>
      <main class="flex-1 overflow-auto">
        <Routes>
          <Route path="/" component={HomePage} />
          <Route path="/fixed" component={FixedSizePage} />
          <Route path="/dynamic" component={DynamicSizePage} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
