import { Searchbar } from "../fields/Searchbar";
import logo from '@/assets/logo.png'

export const Navbar = ({className}) => {
  const menuItems = [
    { text: "Home", link: "#" },
    { text: "Tentang", link: "#" },
    { text: "Artikel", link: "#" },
    { text: "Information", link: "#" },
  ];

  return (
    <>
      <header className={`flex justify-between items-center ${className}`}>
          <div className="wrapper flex items-center gap-2">
            <div className="nav-brand-logo bg-[#073D5B] pl-14 pr-2 py-4 rounded-r-full">
              <img className="border-2 border-white rounded-full bg-white object-cover" src={logo} alt="" width={75} height={75}/>
            </div>
            <a href="" className="text-3xl font-bold text-[#073D5B]">Si-Dihimen</a>
        </div>

        {/* Navigation Menu */}
        <nav className="menu flex flex-col justify-end gap-4 items-center py-4">
          <Searchbar className="ml-auto mr-16"/>
          <ul className="nav-menu flex justify-end items-center py-2 px-16 gap-20 ">
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
    </>
  );
};
