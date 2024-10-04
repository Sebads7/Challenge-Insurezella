import "swiper/swiper-bundle.css";

import { INSURANCE_PLANS } from "../constants";

import { Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Items } from "./Items";
import useScreenSizes from "../hooks/useScreenSizes";

const Slide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleDotClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index * 2);
      setActiveIndex(index);
    }
  };

  const { isMobile } = useScreenSizes();

  return (
    <div className="h-full  relative ">
      <div className=" relative  md:hidden">
        <Swiper
          modules={[Pagination]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          spaceBetween={1}
          slidesPerView={isMobile ? 2 : 3}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-[25rem] sm:w-[36rem]"
        >
          {INSURANCE_PLANS.map((plan, index) => (
            <SwiperSlide className=" py-10 ">
              <Items plan={plan} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Dots */}
        <div className="flex justify-center items-center gap-3 pt-1 absolute  w-full md:hidden ">
          {INSURANCE_PLANS.slice(0, isMobile ? 3 : 2).map((_, index) => (
            <div
              key={index}
              className={`w-5 h-5 rounded-full cursor-pointer ${
                index === activeIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
