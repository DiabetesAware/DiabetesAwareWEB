import { useState } from "react";
import { Searchbar } from "../fields/Searchbar";
import logo from '@/assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { text: "Home", link: "#" },
    { text: "Tentang", link: "#" },
    { text: "Artikel", link: "#" },
    { text: "Information", link: "#" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`flex justify-between items-center ${className}`}>
      <div className="wrapper flex items-center gap-2">
        <div className="nav-brand-logo bg-[#073D5B] xl:pl-14 sm:pl-5 pr-2 py-4 rounded-r-full">
          <img
            className="border-2 border-white rounded-full xl:w-[75px] sm:w-[35px] xl:h-[75px] sm:h-[35px] bg-white object-cover"
            src={logo}
            alt=""
            width={75}
            height={75}
          />
        </div>
        <a href="" className="xl:text-3xl sm:text-md font-bold text-[#073D5B]">Si-Dihimen</a>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden mr-4" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={30} color="#073D5B" /> : <FaBars size={30} color="#073D5B" />}
      </div>

      {/* Navigation Menu */}
      <nav
        className={`menu flex flex-col md:flex-row justify-end items-center gap-4 md:py-4 ${
          isMenuOpen ? 'block' : 'hidden'
        } md:block`}
      >
        <Searchbar className="ml-auto mr-16" />
        <ul className="nav-menu flex flex-col md:flex-row justify-end items-center py-2 px-16 gap-4 md:gap-20">
          {menuItems.map((item, i) => (
            <li className="nav-item" key={i}>
              <a
                href={item.link}
                className="nav-link py-2 px-2 hover:border-b-4 hover:border-b-[#79C4EE]"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
