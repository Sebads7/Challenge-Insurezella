import { FaArrowRightLong } from "react-icons/fa6";

interface Plan {
  name: string;
  icon?: string;
  description?: string;
  button?: string;
  image?: string;
}

export const Items = ({ plan }: { plan: Plan }) => {
  return (
    <>
      <ul className=" flex justify-center items-center   h-full">
        <li className="bg-white shadow-lg shadow-blue-500/50 rounded-lg w-40 h-40  md:w-32 md:h-32 lg:w-44 lg:h-44 flex flex-col justify-center items-center text-center gap-2 border">
          <img
            src={plan.icon}
            alt={plan.name}
            className="w-12 h-12 lg:w-14 lg:h-14"
          />
          <p className="w-[60%] lg:w-2/4 text-base  2xl:text-lg mx-auto  font-semibold ">
            {plan.name}
          </p>
        </li>
      </ul>
    </>
  );
};

export const CompareItems = ({ plan }: { plan: Plan }) => {
  return (
    <div className=" md:px-5  z-10  w-full ">
      <div className="w-full px-3 h-36 lg:h-[14rem]  overflow-hidden">
        <img
          src={plan.image}
          alt={plan.name}
          className="object-cover h-full lg:h-[20rem] w-full "
        />
      </div>
      <ul className="md:pl-7  z-10">
        <li className="flex flex-col  pl-5 px-10 lg:pr-24  gap-5  ">
          <h3 className="text-xl  lg:text-3xl font-semibold pt-5 ">
            {plan.name}
          </h3>
          <p className="text-gray-500 text-lg sm:text-base  sm:h-[11rem] lg:h-28">
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
  );
};
