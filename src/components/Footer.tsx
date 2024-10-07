import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import { FOOTER_DATA } from "../constants";
import useScreenSizes from "../hooks/useScreenSizes";
import { Link } from "react-router-dom";

const Footer = () => {
  const { xsScreen, smScreen, isTablet } = useScreenSizes();

  return (
    <>
      <footer className=" w-full lg:h-[20rem]  lg:flex justify-center relative  overflow-hidden ">
        <div className="w-[90%] py-5 px-2 lg:px-10   bg-white absolute shadow-2xl bottom-10 z-10 border hidden lg:block ">
          <div className="grid grid-cols-4 w-full h-full z-10 ">
            {/* FIRST COLUMN */}
            <div className="w-[9rem] lg:w-[10rem]  flex flex-col items-center justify-center lg:-translate-y-2 gap-2 ">
              <img
                src="Assets/logo.png"
                alt="logo"
                className="w-14 h-14 rounded-md"
              />
              <p className="text-center md:text-xs  lg:text-sm text-gray-500">
                "Discover the Peace of Mind Your Deserve with Insurezella "Your
                Reliable Insurance Umbrella"
              </p>
              <div className="flex flex-row  gap-4 pt-3">
                <Link to="">
                  <FaFacebook className="lg:w-5 lg:h-5 w-4 h-4" />
                </Link>
                <Link to="/">
                  <FaTwitter className="lg:w-5 lg:h-5 w-4 h-4" />
                </Link>
                <Link to="/">
                  <FaInstagram className="lg:w-5 lg:h-5 w-4 h-4" />
                </Link>
                <Link to="/">
                  <FaLinkedin className="lg:w-5 lg:h-5 w-4 h-4" />
                </Link>
              </div>
            </div>

            {FOOTER_DATA.map((section, index) => (
              <div key={index} className="pt-5">
                <ul className="text-gray-500 text-xs lg:text-sm  ">
                  <li
                    className={`text-lg lg:text-xl font-bold pb-2 text-[#4d5190]  ${
                      section.title === "Get In Touch"
                        ? " translate-x-[-1rem] lg:translate-x-0 "
                        : ""
                    } `}
                  >
                    {section.title}
                  </li>
                  {section.services &&
                    section.services.map((service, index) => (
                      <li key={index} className="flex items-center gap-3 pb-3 ">
                        <img
                          src={section.icons[index]}
                          alt={service}
                          className="lg:w-4 lg:h-4 w-3 h-3"
                        />
                        {service}
                      </li>
                    ))}
                  {section.links &&
                    section.links.map((link, index) => (
                      <li key={index} className="pb-3  lg:w-fit ">
                        <a
                          href=""
                          className=" hover:text-blue-500 cursor-pointer "
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  {section.info &&
                    section.info.map((info, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 translate-x-[-1rem] lg:translate-x-0"
                      >
                        <img
                          src={section.icons[index]}
                          alt={info}
                          className="lg:w-4 lg:h-4 w-3 h-3"
                        />
                        <p className="w-3/5"> {info}</p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {(xsScreen || smScreen || isTablet) && (
          <div className="w-full relative ">
            {/* LEFT WHITE CONTAINER */}
            <div className="w-11/12 h-[15rem] bg-white  translate-y-6 flex justify-center items-center gap-10 md:gap-40  shadow-lg shadow-blue-500/50">
              <div className="w-[10rem]  flex flex-col items-center justify-center gap-2 ">
                <img
                  src="Assets/logo.png"
                  alt="logo"
                  className="w-14 h-14 rounded-md"
                />
                <p className="text-center text-xs  text-gray-500">
                  Discover the Peace of Mind Your Deserve with Insurezella "Your
                  Reliable Insurance Umbrella"
                </p>
                <div className="flex flex-row gap-4 pt-3">
                  <FaFacebook />
                  <FaTwitter />
                  <FaInstagram />
                  <FaLinkedin />
                </div>
              </div>

              <div>
                <p className=" text-lg md:text-xl font-bold pb-2 text-[#4d5190]">
                  Services
                </p>
                {FOOTER_DATA.map((section, index) => (
                  <div key={index}>
                    <ul className="text-gray-500 text-xs">
                      {section.services &&
                        section.services.map((service, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-3 pb-3 "
                          >
                            <img
                              src={section.icons[index]}
                              alt={service}
                              className="w-3 h-3"
                            />
                            {service}
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* MIDDLE BLUE CONTAINER */}
            <div className=" h-[7rem] bg-[#2e77f9] z-0  "></div>

            {/* RIGHT WHITE CONTAINER */}

            <div className="w-11/12 pl-4 ml-auto  h-[15rem]  bg-white -translate-y-6  z-10 flex items-center justify-center  md:gap-40 shadow-lg shadow-blue-500/50   ">
              <div className="flex w-full justify-center  ">
                {FOOTER_DATA.map(
                  (section, index) =>
                    (section.links || section.info) && (
                      <div key={index} className=" md:px-10 ">
                        <p
                          className={`  ${
                            section.title === "Get In Touch"
                              ? " translate-x-[2.5rem]"
                              : ""
                          }    text-lg md:text-xl font-bold pb-2 text-[#4d5190]  `}
                        >
                          {section.title}
                        </p>
                        <ul className="flex flex-col  h-full w-full  items-center  text-gray-500  pr-2 text-xs md:text-sm">
                          {section.links &&
                            section.links.map((link, index) => (
                              <li
                                key={index}
                                className="w-[7.5rem] md:w-[8rem] pb-5 md:pb-3"
                              >
                                {link}
                              </li>
                            ))}

                          {section.info &&
                            section.info.map((info, index) => (
                              <li
                                key={index}
                                className="flex items-center  w-3/4 gap-2 pb-5"
                              >
                                {section.icons && section.icons[index] && (
                                  <img
                                    src={section.icons[index]}
                                    alt={info}
                                    className="w-3 h-3"
                                  />
                                )}
                                <p className="">{info}</p>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )
                )}
              </div>
            </div>

            <div className="xs:w-full h-3/4 bg-bgwhite"></div>
          </div>
        )}
        <div className="w-full h-[4rem] bg-[#2e77f9] bottom-0 absolute hidden lg:block "></div>
      </footer>
    </>
  );
};

export default Footer;
