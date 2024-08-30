import { useState, useEffect} from "react";
import { Searchbar } from "../fields/Searchbar";
import logo from "@/assets/logo.png";
import { useInView } from "react-intersection-observer";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

export const Navbar = ({ className }) => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { ref: inViewRef, inView: isInView } = useInView({ triggerOnce: true });
  const menuItems = [
    { text: "Home", link: "home", type: "scroll" },
    { text: "Tentang", link: "tentang", type: "scroll" },
    { text: "Artikel", link: "artikel", type: "scroll" },
    { text: "Informasi", link: "informasi", type: "scroll" },
    { text: "Kuisoner", link: "/form-kuisoner", type: "navigate" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 72) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky w-full bg-white top-0 z-50 transition-all duration-500 ease-in-out ${className} ${
        shadow ? "shadow-xl" : ""
      }`}
      ref={inViewRef}
      style={{
          transform: isInView ? "none" : "translateY(-50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
    >
      <div className="mx-auto flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <div className="nav-brand-logo bg-[#073D5B] my-1 lg:pl-14 sm:pl-5 pr-2 py-4 rounded-r-full">
            <img
              className="border-2 border-white rounded-full lg:w-[75px] sm:w-[35px] lg:h-[75px] sm:h-[35px] bg-white object-cover"
              src={logo}
              alt="Logo"
              width={75}
              height={75}
            />
          </div>
          <RouterLink
            to="/"
            className="lg:text-3xl sm:text-md font-bold text-[#073D5B]"
          >
            Si-Dihimen
          </RouterLink>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div
          className="md:hidden mr-4 cursor-pointer"
          onClick={() => setToggleNavbar(!toggleNavbar)}
        >
          {toggleNavbar ? (
            <FaTimes size={30} color="#073D5B" />
          ) : (
            <FaBars size={30} color="#073D5B" />
          )}
        </div>

        {/* Large Screen Menu */}
        <div className="hidden md:flex md:flex-col md:items-center">
          <Searchbar className="ml-auto mr-16" />
          <ul className="nav-menu flex flex-col md:flex-row justify-end items-center py-2 px-16 gap-4 md:gap-20">
            {menuItems.map((item, i) => (
              <li className="nav-item" key={i}>
                {item.type === "scroll" ? (
                  <ScrollLink
                    to={item.link}
                    spy={true}
                    smooth={true}
                    duration={700}
                    className={`hover:text-[#073D5B] cursor-pointer ${
                      activeSection === item.link
                        ? "border-b-4 border-b-[#79C4EE]"
                        : ""
                    }`}
                    onSetActive={() => setActiveSection(item.link)}
                  >
                    {item.text}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to={item.link}
                    className={`hover:text-[#073D5B] cursor-pointer ${
                      activeSection === item.link
                        ? "border-b-4 border-b-[#79C4EE]"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveSection(item.link);
                      setToggleNavbar(false);
                    }}
                  >
                    {item.text}
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Small Screen Menu */}
        <div className={`${toggleNavbar ? "block" : "hidden"} md:hidden`}>
          <ul className="bg-white p-5 text-start">
            {menuItems.map((item, i) => (
              <li className="nav-item" key={i}>
                {item.type === "scroll" ? (
                  <ScrollLink
                    to={item.link}
                    spy={true}
                    smooth={true}
                    duration={700}
                    className={`block py-2 hover:text-[#073D5B] ${
                      activeSection === item.link
                        ? "border-b-4 border-b-[#79C4EE]"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveSection(item.link);
                      setToggleNavbar(false);
                    }}
                  >
                    {item.text}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to={item.link}
                    className={`block py-2 hover:text-[#073D5B] ${
                      activeSection === item.link
                        ? "border-b-4 border-b-[#79C4EE]"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveSection(item.link);
                      setToggleNavbar(false);
                    }}
                  >
                    {item.text}
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
