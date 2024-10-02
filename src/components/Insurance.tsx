import { useState } from "react";
import { INSURANCE_PLANS } from "../constants";
import useScreenSizes from "../hooks/useScreenSizes";

const Slide = () => {
  const { isMobile, isTablet } = useScreenSizes();
  const [activeIndex, setActiveIndex] = useState(0);

  if (isMobile === null || isTablet === null) {
    return null;
  }

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const visiblePlans = isMobile ? 2 : isTablet ? 3 : 5;

  const translateX = (activeIndex * -80) / visiblePlans;
  return (
    <div className="flex flex-col w-full gap-8">
      <div className="overflow-hidden xs:h-full py-5 w-full  xs:px-10 sm:px-14 md:px-20 lg:px-10 xl:px-24 mx-auto ">
        <div
          className="flex transition-transform duration-500 ease-in-out "
          style={{
            transform: `translateX(${translateX}%)`,
            width: `${
              (INSURANCE_PLANS.length / visiblePlans) * (isMobile ? 105 : 100)
            }%`,
          }}
        >
          {INSURANCE_PLANS.map((plan, index) => (
            <ul
              key={index}
              className="py-5 mx-auto flex px-4  items-center justify-center h-full  xs:-translate-x-2 "
            >
              <li className="bg-white shadow-lg shadow-blue-500/50 rounded-lg w-[12rem] h-[12rem] lg:w-[10rem] lg:h-[10rem]   xl:w-[12rem] xl:h-[12rem]  2xl:w-[14rem] 2xl:h-[14rem] flex flex-col justify-center items-center text-center gap-2 border">
                <img
                  src={plan.icon}
                  alt={plan.name}
                  className="2xl:w-18 2xl:h-18 xl:w-16 xl:h-16 lg:w-14 lg:h-14 w-12 h-12 mx-auto"
                />
                <p className="w-[60%] xl:w-[50%] 2xl:w-[40%] mx-auto lg:text-base 2xl:text-lg  font-semibold">
                  {plan.name}
                </p>
              </li>
            </ul>
          ))}
        </div>
      </div>
      {/* Navigation Dots */}
      <div className="flex justify-center items-center gap-3  -translate-y-5  lg:hidden ">
        {INSURANCE_PLANS.slice(0, isMobile ? 3 : isTablet ? 3 : 3).map(
          (_, index) => (
            <div
              key={index}
              className={`w-5 h-5 rounded-full cursor-pointer mobile:w-5 mobile:h-5  ${
                index === activeIndex ? "bg-blue-600 " : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Slide;
