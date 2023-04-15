import { Component as SolidComponent, For, lazy } from 'solid-js';
import { A, Route, Routes } from '@solidjs/router';
import HomePage from './pages/home';

const FixedSizePage = lazy(() => import('./pages/fixed'));
const DynamicSizePage = lazy(() => import('./pages/dynamic'));
const SlotPage = lazy(() => import('./pages/slot'));

const routes = [
  { name: 'Home', href: '/' },
  { name: 'Fixed Size', href: '/fixed' },
  { name: 'Dynamic Size', href: '/dynamic' },
  { name: 'Slot', href: '/slot' },
];

const App: SolidComponent = () => {
  return (
    <div class="h-screen flex flex-col">
      <header class="h-[64px] px-[16px] flex items-center ">
        <For each={routes} fallback={null}>
          {(item) => (
            <A
              href={item.href}
              activeClass="text-blue-500 border-b-4 border-blue-500"
              class="text-xl mr-[28px] hover:to-blue-500 h-full leading-[64px]"
              end={true}
            >
              {item.name}
            </A>
          )}
        </For>
      </header>
      <main class="flex-1 overflow-auto bg-slate-50">
        <Routes>
          <Route path="/" component={HomePage} />
          <Route path="/fixed" component={FixedSizePage} />
          <Route path="/dynamic" component={DynamicSizePage} />
          <Route path="/slot" component={SlotPage} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
