import { Searchbar } from "../fields/Searchbar";

export const Navbar = () => {
  return (
    <>
      <header>
        <div className="navbar w-full flex justify-between items-center px-32 py-6 border">
          <div className="logo">
            <p className="text-2xl font-bold">Logo</p>
          </div>
          <Searchbar className="border border-[#333]"/>
        </div>

        {/* Navigation Menu */}
        <nav className="menu">
          <ul className="nav-menu flex justify-evenly items-center py-5  border">
            <li className="nav-item">
              <a href="#" className="nav-link py-5 hover:border-b-2 hover:border-b-[#333]">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link py-5 hover:border-b-2 hover:border-b-[#333]">
                Tentang
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link py-5 hover:border-b-2 hover:border-b-[#333]">
                Artikel
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link py-5 hover:border-b-2 hover:border-b-[#333]">
                Information
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
