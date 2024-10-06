import Button from "../components/Button";
import {
  COMPARE_PLANS,
  COMPARE_SERVICE,
  INSURANCE_CATEGORIES,
  INSURANCE_PLANS,
} from "../constants";

import InsuranceSlider from "../components/InsuranceSlider";

import { CompareItems, Items } from "../components/Items";
import CompareSlider from "../components/CompareSlider";

const Home = () => {
  return (
    <div className="w-full h-full  bg-bgwhite ">
      <header>
        <div className="w-full  relative h-[28rem] lg:h-[35rem] overflow-hidden  ">
          {/* Left Side with Text */}
          <div className="  h-full  absolute left-5 xs:left-0  md:left-[5rem] lg:left-[8rem] xl:left-[15rem]    flex justify-start items-center z-[1]">
            <div className="relative  w-[50%] lg:w-[60%]  pl-5  z-10 ">
              <h1 className=" text-2xl  lg:text-5xl md:w-[85%]  font-extrabold text-[#005cff] ">
                YOUR GUIDE TO QUALITY COVERAGE
              </h1>
              <h2 className=" pt-5 lg:pt-10 w-5/6 sm:text-sm  lg:text-xl text-gray-500 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h2>
              <button
                type="button"
                title="button"
                className="bg-lightblue btn-effect  px-8 py-2  text-sm lg:text-xl font-bold text-white mt-9  lg:mt-14   "
              >
                FIND PLANS
              </button>
            </div>
          </div>

          {/* Right Side with Hero Image */}
          <div className=" h-full flex xs:w-[170%] xs:-translate-x-[19rem] w-[180%] -translate-x-[19rem]  lg:translate-x-0 lg:w-full backgn-gradient lg:justify-end">
            <img
              src="Assets/background.png"
              alt="hero image"
              className="object-cover    scale-[1]   "
            />
          </div>
        </div>
      </header>

      {/* COMMITTED SECTION */}
      <section className="w-full bg-bgwhite ">
        {/* INSURANCE PLANS  */}
        {/* GRID VIEW */}
        <div className="pt-10">
          <div className="hidden lg:flex justify-center items-center md:space-x-5 xl:space-x-10   ">
            {INSURANCE_PLANS.map((plan, index) => (
              <Items plan={plan} key={index} />
            ))}
          </div>
        </div>

        {/* SLIDER VIEW */}
        <InsuranceSlider />

        <div className="flex flex-col lg:flex-row  lg:gap-4 xl:gap-20  w-full py-20">
          <div className="w-full lg:pl-8 flex  lg:items-start  lg:justify-end  scale-75 lg:scale-100 ">
            <img
              src="Assets/committed-help.png"
              alt="committed-help"
              className="object-contain "
            />
          </div>

          {/* TEXT VIEW */}
          <div className="flex justify-end lg:justify-center  -translate-y-6 lg:translate-y-0   w-full pr-10">
            <div className="xs:w-3/4 w-[75%] md:w-4/6 lg:w-full ">
              <h2 className="text-2xl md:text-4xl lg:text-5xl w-3/4  font-bold lg:pt-10  ">
                Committed to help you find the right plan
              </h2>
              <p className="mt-8 w-full md:w-5/6 text-sm md:text-base  2xl:w-4/6  text-zinc-500">
                Insurance is an important financial tool that can help you
                protect yourself and your loved ones from financial losses in
                the event of an unexpected event. It is important to consider
                your individual needs and circumstances when choosing the right
                insurance coverage for you and your family.
              </p>

              <Button name="ABOUT INSUREZELLA" />

              <ul className="flex gap-5 ">
                {COMPARE_SERVICE.map((data, index) => (
                  <li key={index} className="flex  items-center gap-2 mt-10  ">
                    <img
                      src={data.icon}
                      alt="obama-care-icon"
                      className="md:w-18 md:h-18 w-14 h-14"
                    />
                    <div className="flex flex-col  font-semibold text-xs md:text-lg">
                      <p className="  ">{data.name}</p>
                      <p>{data.span}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-full xs:flex flex-col justify-center items-center  relative  bg-[#e9f5ff]/80 py-24  ">
        <h2 className="text-center  text-2xl md:text-4xl lg:text-5xl font-bold xs:font-extrabold xs:w-[90%]">
          Pick the insurance that suits your needs.
        </h2>

        <div className="  w-full">
          <div className="flex transition-transform duration-500 ease-in-out   ">
            <ul className="grid grid-cols-2  lg:grid-cols-3 gap-5 mt-10 md:gap-10 md:mt-24 md:place-items-center   mx-auto  ">
              {INSURANCE_CATEGORIES.map((category, index) => (
                <li
                  key={index}
                  className="flex flex-col justify-center items-center gap-2 md:gap-5  "
                >
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="w-9 h-9 md:w-14 md:h-14 xl:w-16 xl:h-16 "
                  />
                  <p className=" lg:text-2xl   font-bold text-blue-500">
                    {category.name}
                  </p>

                  <p className="md:w-[18rem] w-[12rem] text-xs md:text-sm text-center text-gray-500">
                    {category.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full   lg:flex flex-col justify-center items-center md:pt-20 xs:pl-3 md:px-10  xl:px-28 bg-[##f8f8f8]">
        <div className="flex flex-col  lg:flex-row w-full  ">
          {/* LEFT IMAGE  */}
          <div className=" flex md:justify-center lg:justify-end   w-full">
            <img
              src="Assets/protecting.png"
              alt=" protecting image"
              className="scale-[0.7] md:scale-[0.8]   translate-x-[-2rem] lg:translate-x-0 xs:translate-y-4 "
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="flex  xl:w-full items-center  px-10 lg:pt-10  justify-end lg:justify-start  ">
            <div className=" lg:pt-10  pl-10 md:pl-0 xs:w-full  w-[90%] pr-10 md:w-[60%]    lg:w-[30rem] xl:w-[35rem] ">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                Protecting people, one policy at a time
              </h2>

              <p className="pt-6 text-sm md:text-base sm:pt-9 lg:pt-14 text-gray-500">
                We are committed to delivering the highest standards of
                protection, tailored to meet the unique needs of each individual
                and family. Our dedicated team of professionals works tirelessly
                to offer comprehensive insurance solutions that not only
                safeguard your assets but also offer you the support and
                assistance you need in times of uncertainty.
              </p>

              <Button name=" Learn More" className=" w-[15rem] " />
            </div>
          </div>
        </div>

        <div className=" overflow-hidden w-full  h-full pb-20 sm:mb-16 xl:mt-10 bg-[#f8f8f8]">
          <h2 className="text-center font-bold text-2xl md:text-4xl lg:text-5xl pt-28 pb-10">
            We're here to help
          </h2>
          {/* SLIDER VIEW */}
          <CompareSlider />
          {/* GRID VIEW */}
          <div className="lg:grid grid-cols-2 gap-y-14  w-full 2xl:w-[90%] mx-auto hidden">
            {COMPARE_PLANS.map((plan, index) => (
              <CompareItems plan={plan} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
