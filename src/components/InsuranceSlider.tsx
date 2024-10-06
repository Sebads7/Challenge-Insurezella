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

  const { smScreen, xsScreen } = useScreenSizes();

  return (
    <div className="h-full  relative ">
      <div className=" relative  lg:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={1}
          slidesPerGroup={smScreen || xsScreen ? 2 : 1}
          slidesPerView={2}
          className=" w-[26rem] "
          onSlideChange={(swiper) =>
            setActiveIndex(
              swiper.activeIndex === 0 ? 0 : swiper.activeIndex - 1
            )
          }
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {INSURANCE_PLANS.map((plan, index) => (
            <SwiperSlide className=" py-10  ">
              <Items plan={plan} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Dots */}
        <div className="flex justify-center items-center gap-3 pt-1 absolute  w-full lg:hidden ">
          {INSURANCE_PLANS.slice(0, 3).map((_, index) => (
            <div
              key={index}
              className={`w-5 h-5 rounded-full cursor-pointer ${
                activeIndex === index ? "bg-blue-600" : "bg-gray-300"
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
