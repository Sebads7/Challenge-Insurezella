import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../constants";
import { MdEmail, MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosCall, IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const handleHover = (linkPath: string) => {
    if (linkPath === "/find-insurance") {
      setTimeout(() => {
        setOpen(true);
      }, 200);
    }
  };

  const handleClose = () => {
    setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  useEffect(() => {
    const isStickyNav = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", isStickyNav);

    //clean up
    return () => {
      window.removeEventListener("scroll", isStickyNav);
    };
  }, []);

  return (
    <>
      <div className="w-full flex lg:block justify-center md:justify-between  items-center h-full py-5 pl-32 md:pl-40  xl:pl-44  lg:h-12 bg-[#2e77f9] ">
        <GiHamburgerMenu
          className="text-white text-4xl rounded-sm lg:hidden block   "
          onClick={() => setOpenNav(true)}
        />
        <ul className="flex flex-col lg:flex-row pl-14 sm:pr-10   lg:pl-0  h-full md:items-center  lg:justify-between gap-2 lg:gap-0 text-white xl:px-40  ">
          <li className="font-bold text-lg lg:text-xl">
            Want to Connect with Us?
          </li>
          <li className="flex flex-col lg:flex-row  gap-2 lg:gap-6 text-xs lg:text-sm font-semibold">
            <p className="flex  items-center gap-2 ">
              <span>
                <MdEmail className="w-5 h-5 " />
              </span>
              Mail us: support@insurezella.com
            </p>
            <p className="flex items-center gap-2 ">
              <span>
                <IoIosCall className="w-5 h-5 " />
              </span>
              Call us: (887) 227 0774
            </p>
          </li>
        </ul>
      </div>

      <div
        className={`${
          isSticky
            ? "lg:fixed top-0 lg:h-[4.5rem] border-b border-blue-500  bg-white/95  z-[50]"
            : " "
        } w-full flex justify-between items-center px-20 lg:py-3 `}
      >
        {/* LOGO */}
        <Logo className="" />
        {/* NAV LINKS */}
        <nav className="relative hidden lg:block  ">
          <ul className="flex  w-full relative">
            {NAV_LINKS.map((link, index) => (
              <li
                key={link.path}
                className="flex items-center  "
                onMouseEnter={() => handleHover(link.path)}
                onMouseLeave={() => handleClose()}
              >
                {index !== 0 && (
                  <div className="w-[2px] h-2 mx-2 bg-black"></div>
                )}
                <NavLink
                  to={link.path}
                  className={({
                    isActive,
                  }) => ` font-semibold flex items-center  h-full text-sm
                   ${
                     isActive
                       ? "text-blue-500 border-b-2   border-blue-500 "
                       : "hover:text-gray-400"
                   }
                  }`}
                >
                  {link.name}{" "}
                  {link.path === "/find-insurance" ? (
                    <MdOutlineArrowDropDown className="w-5 h-5" />
                  ) : (
                    ""
                  )}
                </NavLink>

                {open && link.path === "/find-insurance" && (
                  <div className="w-2/4 h-[5rem] mx-2 translate-x-8 -translate-y-4  bg-white border rounded-r-md shadow-lg top-10 left-0 inset-0 absolute z-[100] text-center text-sm flex flex-col justify-center">
                    <p>LINK</p>
                    <p>LINK</p>
                    <p>LINK</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CALL US NOW BUTTON */}
        <div className="hidden lg:block">
          <button
            title="Open modal"
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 hover:scale-105 transition-all duration-300 ease-in-out text-white text-sm px-6 py-3 rounded-full shadow-lg"
            onClick={() => setOpenModal(true)}
          >
            Call Us Now{" "}
            <span>
              <FaArrowRightLong />
            </span>
          </button>
        </div>

        {openModal && (
          <div className="flex justify-center items-center w-full h-svh fixed inset-0 bg-black/50 z-[99999999]">
            <div className="w-[50rem] h-[40rem]   bg-white">
              <div className="w-full flex justify-end pt-5 pr-5">
                <button
                  title="Close modal"
                  className="  hover:text-blue-500 transition-all duration-300 text-2xl px-6 py-3 rounded-full"
                  onClick={() => setOpenModal(false)}
                >
                  <IoMdClose />
                </button>
              </div>

              <h1 className="text-center  text-4xl pt-10">CALL US NOW!</h1>
            </div>
          </div>
        )}

        {openNav && (
          <div className="w-full h-svh fixed inset-0 bg-black/80 z-[99999999]">
            <motion.nav
              className="relative w-2/4 flex flex-col justify-start items-start h-svh  bg-white "
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="w-full pr-5 pt-5   flex justify-end">
                <button
                  title="Close modal"
                  className="  hover:text-blue-500 transition-all duration-300 text-3xl px-6 py-3 rounded-full"
                  onClick={() => {
                    handleClose();
                    setOpenNav(false);
                  }}
                >
                  <IoMdClose />
                </button>
              </div>
              <ul className="flex w-full justify-center items-start top-20 pl-5  flex-col  gap-4 h-[3rem]  relative">
                {NAV_LINKS.map((link, index) => (
                  <li
                    key={link.path}
                    className="flex items-center  "
                    onClick={() => setOpenNav(false)}
                  >
                    {index !== 0 && (
                      <div className="w-[2px] h-2 mx-2 bg-black hidden"></div>
                    )}
                    <NavLink
                      to={link.path}
                      className={({
                        isActive,
                      }) => ` font-semibold flex items-center  h-full text-sm
                      ${
                        isActive
                          ? "text-blue-500 border-b-2 h-[19px] border-blue-500 "
                          : "hover:text-gray-400"
                      }
                     }`}
                    >
                      {link.name}
                    </NavLink>

                    {open && link.path === "/find-insurance" && (
                      <div className="w-2/4 h-[5rem] mx-2 translate-x-8  bg-white border rounded-r-md shadow-lg top-10 left-0 inset-0 absolute z-[100] text-center text-sm flex flex-col justify-center">
                        <p>LINK</p>
                        <p>LINK</p>
                        <p>LINK</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </motion.nav>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
