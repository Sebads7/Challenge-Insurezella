import { FaArrowRightLong } from "react-icons/fa6";
import { COMPARE_PLANS } from "../constants";
import useScreenSizes from "../hooks/useScreenSizes";
import { useState } from "react";

const Compare = () => {
  const { isMobile, isTablet } = useScreenSizes();
  const [activeIndex, setActiveIndex] = useState(0);

  if (isMobile === null || isTablet === null) {
    return null;
  }

  const visiblePlans = isMobile ? 1 : 5;

  const translateX = (activeIndex * (isMobile ? -110 : -220)) / visiblePlans;

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="  flex flex-col  ">
      <div className="sm:px-5 lg:px-24 2xl:px-14 custom-translate custom-translate-2  overflow-hidden ">
        <div
          className="flex w-full  2xl:gap-8  transition-transform duration-500 ease-in-out  sm:grid grid-cols-2   mobil-gap mobil-gap-2  "
          style={{
            transform: `translateX(${translateX}%)`,
            width: `${(COMPARE_PLANS.length / visiblePlans) * 100}
            }%`,
          }}
        >
          {COMPARE_PLANS.map((plan, index) => (
            <div className=" md:px-5  z-10  w-full " key={index}>
              <div className="w-full xs:w-[28rem]   px-3 md:px-0 h-[14rem]  overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="object-cover h-[20rem] w-full "
                />
              </div>
              <ul className="md:pl-7   z-10">
                <li className="flex flex-col pl-5 xs:w-[20rem] sm:h-[20rem]  gap-5  ">
                  <h3 className="sm:text-xl text-3xl font-semibold pt-5 ">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 sm:h-[12rem] sm:w-[14rem] md:w-auto md:h-auto   2xl:h-[7rem]  ">
                    {plan.description}
                  </p>

                  <button className="text-blue-600 hover:border-blue-400 hover:border-b w-fit transition duration-300 ease-in-out flex gap-4 items-center ">
                    {plan.button}
                    <span>
                      <FaArrowRightLong />
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Dots */}
      <div className="flex justify-center items-center gap-4  bottom-0 translate-y-5 mt-5   z-10  sm:hidden">
        {COMPARE_PLANS.slice(0, 4).map((_, index) => (
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

export default Compare;
