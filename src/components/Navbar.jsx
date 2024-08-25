import logo1 from "../assets/images/5.png";
import { navItems } from "../constants";
import { useState } from "react";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-sm border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-16 w-16 mr-2" src={logo1} alt="logo" />
            <span className="tracking-tight text-xl">HanzooPlays</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-5 items-center relative">
            <i className="bx bx-search absolute left-6 text-2xl text-gray-500"></i>
            <input
              type="text"
              className="text-black py-2 pl-10 border rounded-md border-slate-500 focus:bg-slate-100 focus:outline-slate-500"
              placeholder="Search . . ."
            />

            <button className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
              Add Button Here
            </button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <i className="bx bx-x text-4xl"></i>
              ) : (
                <i className="bx bx-menu text-4xl"></i>
              )}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <button className="py-2 px-3 border rounded-md">
                Add Button Here
              </button>
              <button className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                Add Button Here
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
