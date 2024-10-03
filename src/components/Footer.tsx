import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import { FOOTER_DATA } from "../constants";
import useScreenSizes from "../hooks/useScreenSizes";

const Footer = () => {
  const { isMobile, isTablet } = useScreenSizes();

  if (isMobile === null || isTablet === null) {
    return null;
  }
  return (
    <>
      <footer className="w-full h-[20rem] flex justify-center relative bg-[#f8f8f8] ">
        <div className="w-[90%] py-5 px-10   bg-white absolute shadow-2xl bottom-10 z-10 border hidden lg:block ">
          <div className="grid grid-cols-4 w-full h-full  ">
            {/* FIRST COLUMN */}
            <div className="w-[10rem]  flex flex-col items-center justify-center -translate-y-2 gap-2 ">
              <img
                src="Assets/logo.png"
                alt="logo"
                className="w-14 h-14 rounded-md"
              />
              <p className="text-center text-sm text-gray-500">
                Discover the Peace of Mind Your Deserve with Insurezella "Your
                Reliable Insurance Umbrella"
              </p>
              <div className="flex flex-row  gap-4 pt-3">
                <FaFacebook className="w-5 h-5" />
                <FaTwitter className="w-5 h-5" />
                <FaInstagram className="w-5 h-5" />
                <FaLinkedin className="w-5 h-5" />
              </div>
            </div>

            {FOOTER_DATA.map((section, index) => (
              <div key={index}>
                <p className="text-xl font-bold pb-2 text-[#4d5190]">
                  {section.title}
                </p>
                <ul className="text-gray-500">
                  {section.services &&
                    section.services.map((service, index) => (
                      <li key={index} className="flex items-center gap-3 pb-3 ">
                        <img
                          src={section.icons[index]}
                          alt={service}
                          className="w-4 h-4"
                        />
                        {service}
                      </li>
                    ))}
                  {section.links &&
                    section.links.map((link, index) => (
                      <li key={index} className="pb-3 ">
                        {link}
                      </li>
                    ))}
                  {section.info &&
                    section.info.map((info, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <img
                          src={section.icons[index]}
                          alt={info}
                          className="w-4 h-4"
                        />

                        <p className="w-3/5"> {info}</p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {(isMobile || isTablet) && (
          <div className="w-full relative">
            {/* LEFT WHITE CONTAINER */}
            <div className="w-[90%] h-[15rem] bg-white shadow-lg  translate-y-6 flex justify-between items-center px-5 sm:px-20">
              <div className="w-[10rem]  flex flex-col items-center justify-center gap-2 ">
                <img
                  src="Assets/logo.png"
                  alt="logo"
                  className="w-14 h-14 rounded-md"
                />
                <p className="text-center text-sm text-gray-500">
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
                <p className="text-xl font-bold pb-2 text-[#4d5190]">
                  Services
                </p>
                {FOOTER_DATA.map((section, index) => (
                  <div key={index}>
                    <ul className="text-gray-500">
                      {section.services &&
                        section.services.map((service, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-3 pb-3 "
                          >
                            <img
                              src={section.icons[index]}
                              alt={service}
                              className="w-4 h-4"
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
            <div className="w-full h-[7rem] bg-[#2e77f9] z-0  "></div>

            {/* RIGHT WHITE CONTAINER */}
            <div className="w-[90%] absolute right-0  h-[17rem]  bg-white -translate-y-6 shadow-lg z-10 flex items-center  px-5  ">
              <div className="flex w-full sm:px-14 pt-3 ">
                {FOOTER_DATA.map(
                  (section, index) =>
                    (section.links || section.info) && (
                      <div key={index} className=" w-full">
                        <p className="text-xl font-bold pb-2 text-[#4d5190]">
                          {section.title}
                        </p>
                        <ul className="text-gray-500 w-full pr-2">
                          {section.links &&
                            section.links.map((link, index) => (
                              <li key={index} className="pb-[13px] w-full">
                                {link}
                              </li>
                            ))}

                          {section.info &&
                            section.info.map((info, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-2 pb-2"
                              >
                                {section.icons && section.icons[index] && (
                                  <img
                                    src={section.icons[index]}
                                    alt={info}
                                    className="w-4 h-4"
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
            <div className="xs:w-full h-full bg-white"></div>
          </div>
        )}
        <div className="w-full h-[4rem] bg-[#2e77f9] bottom-0 absolute xs:hidden "></div>
      </footer>
    </>
  );
};

export default Footer;
