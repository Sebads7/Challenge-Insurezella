import Button from "../components/Button";
import { COMPARE_PLANS, COMPARE_SERVICE, INSURANCE_PLANS } from "../constants";

import InsuranceSlider from "../components/InsuranceSlider";
import Plans from "../components/Plans";

import { CompareItems, Items } from "../components/Items";
import Compare from "../components/CompareSlider";

const Home = () => {
  return (
    <div className="w-full h-full bg-bgwhite ">
      <header>
        <div className="w-full   relative h-[35rem] overflow-hidden ">
          {/* Left Side with Text */}
          <div className=" backgn-gradient h-full  absolute  md:pl-10 w-[60svw]   md:w-[55svw]  lg:w-[45svw]  2xl:w-[59svw] 3xl:w-[80svw]   lg:z-10 xl:w-[50svw] flex justify-start items-center ">
            <div className="relative  md:w-[25rem] xl:w-[30rem] lg:w-auto mx-auto  px-5   xl:px-0 z-10 ">
              <h1 className="xs:text-3xl text-4xl lg:text-5xl   font-extrabold text-[#005cff]">
                YOUR GUIDE TO QUALITY COVERAGE
              </h1>
              <h2 className="pt-10 xs:text-lg xs:pr-3 text-xl text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h2>
              <button
                type="button"
                title="button"
                className="bg-lightblue hover:bg-blue-400 hover:scale-105 transition-all duration-300  ease-in-out px-8 py-2 rounded-full lg:text-2xl font-bold text-white mt-14  "
              >
                FIND PLANS
              </button>
            </div>
          </div>

          {/* Right Side with Hero Image */}
          <div className="w-full h-full flex justify-end  ">
            <img
              src="Assets/hero-bg.jpg"
              alt="hero image"
              className="xl:object-fit object-cover xs:w-[100%] xs:translate-x-[14rem]  w-[65%] translate-x-32 lg:translate-x-0 xl:w-auto  "
            />
          </div>
        </div>
      </header>

      {/* COMMITTED SECTION */}
      <section className="w-full bg-white ">
        {/* INSURANCE PLANS  */}
        {/* GRID VIEW */}
        <div className="pt-10">
          <div className="hidden md:flex justify-center items-center md:space-x-5 xl:space-x-10  ">
            {INSURANCE_PLANS.map((plan, index) => (
              <Items plan={plan} key={index} />
            ))}
          </div>
        </div>

        {/* SLIDER VIEW */}
        <InsuranceSlider />

        <div className="lg:flex justify-center w-full sm:pl-10  py-20 xs:pt-24 xs:px-14 ">
          <img
            src="Assets/committed-help.png"
            alt="committed-help"
            className="xl:w-[30rem] xl:h-[30rem] w-[23rem] h-[22rem]  xs:w-full"
          />

          <div className="xs:px-7 sm:pl-14 xl:pl-20 xl:w-2/4 w-full   ">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl  font-bold pt-10 xs:w-full w-[35rem]">
              Committed to help you find the right plan
            </h2>
            <p className="mt-10 xs:w-full w-[28rem] text-zinc-500">
              Insurance is an important financial tool that can help you protect
              yourself and your loved ones from financial losses in the event of
              an unexpected event. It is important to consider your individual
              needs and circumstances when choosing the right insurance coverage
              for you and your family.
            </p>

            <Button name=" ABOUT INSUREZELLA" />

            <ul className="flex -translate-x-3 gap-10 xs:w-full ">
              {COMPARE_SERVICE.map((data, index) => (
                <li
                  key={index}
                  className="flex  items-center gap-2 mt-10   xs:w-full "
                >
                  <img
                    src={data.icon}
                    alt="obama-care-icon"
                    className="w-18 h-18 xs:w-14 xs:h-14"
                  />
                  <p className="flex flex-col font-semibold text-lg  xs:text-sm xs:w-full">
                    {data.name}
                    <span>{data.span}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full h-full xs:flex flex-col justify-center items-center  relative  bg-[#e9f5ff]/80 py-24  ">
        <h1 className="text-center text-3xl  xl:text-5xl font-bold xs:font-extrabold xs:w-[90%]">
          Pick the insurance that suits your needs.
        </h1>
        <Plans />
      </section>

      <section className="w-full  flex flex-col justify-center items-center pt-20 xs:pl-3 2xl:px-48  bg-[##f8f8f8]">
        <div className="flex flex-col  xl:flex-row xs:pr-10  w-full sm:pl-20  ">
          <img
            src="Assets/protecting.png"
            alt=" protecting image"
            className="lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem]  w-full h-full"
          />
          <div className=" pt-10 w-full pl-10 lg:translate-x-44   xl:translate-x-0   sm:w-[30rem]  md:w-[40rem] ">
            <h1 className="xs:text-2xl text-5xl font-bold">
              Protecting people, one policy at a time
            </h1>

            <p className="pt-6 sm:pt-9 lg:pt-14 text-gray-500">
              We are committed to delivering the highest standards of
              pro-tection, tailored to meet the unique needs of each individual
              and family. Our dedicated team of professionals works tirelessly
              to offer comprehensive insurance solutions that not only safeguard
              your assets but also offer you the support and assistance you need
              in times of uncertainty.
            </p>

            <Button name=" Learn More" className=" w-[15rem] " />
          </div>
        </div>

        <div className=" overflow-hidden w-full  h-full pb-20 sm:mb-16 xl:mt-10 bg-[#f8f8f8]">
          <h2 className="text-center font-bold text-4xl lg:text-5xl pt-28 pb-10">
            We're here to help
          </h2>
          {/* SLIDER VIEW */}
          <Compare />
          {/* GRID VIEW */}
          <div className="sm:grid grid-cols-2 gap-y-14 w-full hidden">
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
