
import Header from "./components/Header/Header";
import SwiperComponent from "./components/Swiper/Swiper";
import ShortcutComponent from './components/Shortcuts/Shortcuts';
import HotDeals from './components/HotDeals/HotDeals';
import { HotDeals as HotDealsModel} from './model/HotDeals';

export default async function Home() {
  const data = await getSliders();
  const shortcuts = await getShortcuts();
  const deals = await getHotDeals();

  return (
    <main>
      <Header />
      <SwiperComponent data={data} />
      <ShortcutComponent data={shortcuts} />
      <HotDeals data={deals} />
    </main>
  );
}

export async function getSliders() {
  const res = await fetch('https://api.testvalley.kr/main-banner/all')
  const data = await res.json();

  return data;
}

export async function getShortcuts() {
  const res = await fetch('https://api.testvalley.kr/main-shortcut/all')
  const data = await res.json();

  return data;
}

export async function getHotDeals() {
  const res = await fetch('https://api.testvalley.kr/collections?prearrangedDiscount');
  const data = await res.json();
  
  const filteredHotDeals = data.items.filter((item: HotDealsModel) => item.type === 'SINGLE' && item.viewType === 'TILE');

  return filteredHotDeals;
}