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
    <div className="w-full h-full  flex flex-col  ">
      <div className="w-full  overflow-hidden">
        <div
          className="flex lg:grid grid-cols-2 lg:w-[80%] xl:w-[65%] 2xl:w-full 2xl:px-32 mx-auto lg:gap-20 gap-10 transition-transform duration-500 ease-in-out "
          style={{
            transform: `translateX(${translateX}%)`,
            width: `${(COMPARE_PLANS.length / visiblePlans) * 100}
            }%`,
          }}
        >
          {COMPARE_PLANS.map((plan, index) => (
            <div
              className=" 2xl:w-[30rem] w-[25rem] xs:w-full  z-10 "
              key={index}
            >
              <div className="w-full 2xl:w-[30rem] h-[14rem]  overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="object-cover h-[20rem] "
                />
              </div>
              <div className="pl-7 h-[15rem]  w-[42rem]  grid grid-cols-2 gap-5  items-start  z-10">
                <div className="flex flex-col items-start gap-5  w-full">
                  <h3 className="text-3xl font-semibold pt-5 ">{plan.name}</h3>

                  <p className="text-gray-500  2xl:h-[7rem] sm:h-[7rem] xl:h-[10rem]  ">
                    {plan.description}
                  </p>

                  <button className="text-blue-600 hover:border-blue-400 hover:border-b transition duration-300 ease-in-out flex gap-4  items-center justify-end">
                    {plan.button}
                    <span>
                      <FaArrowRightLong />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Dots */}
      <div className="flex justify-center items-center gap-4  bottom-0 mt-5   z-10  lg:hidden">
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
