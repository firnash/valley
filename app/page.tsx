
import Header from "./components/Header/Header";
import SwiperComponent from "./components/Swiper/Swiper";
import ShortcutComponent from './components/Shortcuts/Shortcuts';
import HotDeals from './components/HotDeals/HotDeals';
import { HotDeals as HotDealsModel} from './model/HotDeals';
import { Slide } from "./model/Slide";
import { Shortcut } from "./model/Shortcuts";

interface HomeProps {
  bannerData: Slide[],
  shortcuts: Shortcut[],
  discounts: HotDealsModel[],
  filteredHotDeals: HotDealsModel[]
}

async function getData() {
  const bannerResponse = await fetch('https://api.testvalley.kr/main-banner/all');
  const shortcuts = await fetch('https://api.testvalley.kr/main-shortcut/all');
  const discounts = await fetch('https://api.testvalley.kr/collections?prearrangedDiscount');
  const discountResponse = await discounts.json();
  const filteredHotDeals = discountResponse.items.filter((item: HotDealsModel) => item.type === 'SINGLE' && item.viewType === 'TILE');

  return {
    bannerData: await bannerResponse.json(),
    shortcuts: await shortcuts.json(),
    filteredHotDeals
  };
};

export default async function Home() {
  const { bannerData, shortcuts, filteredHotDeals } = await getData();
  return (
    <main>
      <Header />
      <SwiperComponent data={bannerData} />
      <ShortcutComponent data={shortcuts} />
      <HotDeals data={filteredHotDeals} />
    </main>
  );
}