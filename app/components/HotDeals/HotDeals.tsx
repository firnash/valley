"use client";

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Shortcut } from "@/app/model/Shortcuts";
import { HotDeals, Items } from "@/app/model/HotDeals";
import Star from '@/public/star-darkgray.svg';
import PlaceholderImg from '@/public/placeholder.jpeg';

interface Props {
  data: HotDeals[]
}

const HotDeals: React.FC<Props> = ({ data }) => {
const getAllItems = data.map(({ items }: HotDeals) => items).flat();
  return (
    <section className="mainWidth flex gap-8 justify-between">
        <div className="flex items-center flex-col whitespace-nowrap">
            <span className="text-2xl font-semibold text-[#333333]">HOT DEAL</span>
            <span className="text-xs mt-[8px] font-medium text-[12px] w-full text-[#999999]">HAPPY HOUR</span>
        </div>
        <Swiper
            autoplay={true}
            slidesPerView={4}
            spaceBetween={8}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
        >
            {data && data.length && getAllItems.map((item: Items) => (
                <SwiperSlide key={item.entityId}>
                    <div className="shortcutContainer">
                        <div className="imageContainer relative mb-[12px]">
                            {!!item.publication.isExistResidual && <div className="floatingTitle bg-[#009e8a] rounded-sm font-medium text-[#ffffff] text-[12px] p-[4px] absolute left-0 bottom-0">리턴 가능</div>} 
                            <img className="w-[174px] h-[174px] object-cover rounded" src={item.publication.media[0].uri} alt={item?.publication.title} />
                        </div>
                        <div className="text-[15px] mb-[8px]">{item?.publication.productName}</div>
                        <div className="text-[18px] font-semibold">
                            {!!item.publication.priceInfo.discountRate && <span className="text-[#ff5023]">{item.publication.priceInfo.discountRate}%</span>}
                            <span>{item.publication.priceInfo.price}</span>
                        </div>
                        {!!item.publication.tagsOnImage && item.publication.tagsOnImage.map((tag: string) => (
                            <span className="bg-[#f7f7f7] text-[#424242] px-[3px] py-[4px] font-semibold text-[10px] rounded-sm">{tag}</span>
                        ))}
                        <div className="flex text-[12px] mt-[8px]">
                            <Image alt="rating" src={Star} />
                            {item.publication.rating}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
  );
};

export default HotDeals;