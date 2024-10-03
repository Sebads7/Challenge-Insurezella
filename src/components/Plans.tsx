import { useState } from "react";
import { INSURANCE_CATEGORIES } from "../constants";
import useScreenSizes from "../hooks/useScreenSizes";

const Plans = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isMobile, isTablet } = useScreenSizes();

  if (isMobile === null || isTablet === null) {
    return null;
  }

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const visiblePlans = isMobile ? 3 : 5;

  const translateX = (activeIndex * -250) / visiblePlans;

  return (
    <div className="w-full flex flex-col xs:-translate-y-[2rem] items-center   ">
      <div className="overflow-hidden sm:px-8 md:px-20  lg:px-32 flex  w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out   "
          style={{
            transform: `translateX(${translateX}%)`,
            width: `${(INSURANCE_CATEGORIES.length / visiblePlans) * 100}%`,
          }}
        >
          <ul className="grid grid-cols-2 xs:translate-x-[40svw]   xl:grid-cols-3 gap-10 xs:gap-x-[20rem] mt-24 place-items-center w-full xl:w-[70rem] mx-auto  ">
            {INSURANCE_CATEGORIES.map((category, index) => (
              <li
                key={index}
                className="flex flex-col justify-center items-center gap-5 w-svw   "
              >
                <img
                  src={category.icon}
                  alt={category.name}
                  className="lg:w-16 lg:h-16 w-14 h-14 "
                />
                <p className="lg:text-2xl sm:text-xl xs:text-2xl  font-bold text-blue-500">
                  {category.name}
                </p>

                <p className="w-[18rem] sm:w-[15rem] sm:text-sm text-center text-gray-500">
                  {category.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center gap-3 absolute bottom-[-4rem]  sm:hidden">
        {INSURANCE_CATEGORIES.slice(0, 2).map((_, index) => (
          <div
            key={index}
            className={`w-5 h-5 rounded-full cursor-pointer mobile:w-5 mobile:h-5  ${
              index === activeIndex ? "bg-blue-600 " : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Plans;
