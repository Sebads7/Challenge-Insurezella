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

  //   const visiblePlans = isMobile ? 2 : 5;

  //   const translateX = (activeIndex * -80) / visiblePlans;

  return (
    <div className="w-full flex justify-center">
      <div className="overflow-hidden  ">
        <ul className="grid sm:grid-cols-2  xl:grid-cols-3 gap-10 mt-24 place-items-center lg:w-[50rem] xl:w-[70rem]   mx-auto ">
          {INSURANCE_CATEGORIES.slice(0, isMobile ? 3 : 6).map(
            (category, index) => (
              <li
                key={index}
                className="flex flex-col justify-center items-center gap-5  "
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
            )
          )}
        </ul>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center gap-2 absolute bottom-7  sm:hidden">
        {INSURANCE_CATEGORIES.slice(0, 2).map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer mobile:w-5 mobile:h-5  ${
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
