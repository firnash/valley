"use client";

import React, { useRef } from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Slide } from "@/app/model/Slide";
import classes from './Swiper.module.css';

interface DemoSliderProps {
  data: Slide[];
}

const SliderComponent: React.FC<DemoSliderProps> = ({ data }) => {

  const navigationNextRef = useRef<any>();
  const navigationPrevRef = useRef<any>();

  return (
    <section>
        <ul className="h-full w-full mb-[40px]">
            <Swiper
                navigation
                pagination={{ type: "bullets", clickable: true }}
                autoplay={true}
                loop={true}
                modules={[Autoplay, Navigation, Pagination]}
                centeredSlides
                slidesPerView={1}
                spaceBetween={32}
                className={classes.customSwiper}
                
            >
            {data && data.length && data.map(({ mainBannerId, pcImageUrl, title }) => (
                <SwiperSlide key={mainBannerId}>
                    <img alt={title} src={pcImageUrl} />
                </SwiperSlide>
            ))}
            </Swiper>
        </ul>
    </section>
  );
};

export default SliderComponent;