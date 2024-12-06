import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/web-logo.svg";
import git from "../assets/images/git.svg";

const Navbar = ({ toggleSidebar }) => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    toggleSidebar();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const LinkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 border border-darkGrey hover:text-white rounded-md px-3 py-2"
      : "text-primaryText hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <>
      <nav
        className={`z-10 transition-width duration-500 ease-in-out fixed top-0 left-0 right-0 mx-auto py-2 sm:px-6 lg:px-3 border border-solid border-lightGreyText rounded-primaryBorder ${
          scrolling
            ? "w-full bg-white shadow-lg px-[15px]"
            : "w-3/4 px-[10px] shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <NavLink className="flex flex-shrink-0 items-center" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
            </NavLink>
          </div>
          <div className="hidden lg:block">
            <div className="md:flex space-x-2">
              <NavLink to="/" className={LinkClass}>
                Home
              </NavLink>
              <NavLink to="/pricing" className={LinkClass}>
                Pricing
              </NavLink>
              <NavLink to="/about" className={LinkClass}>
                About
              </NavLink>
              <NavLink to="/community" className={LinkClass}>
                community
              </NavLink>
            </div>
          </div>
          <div className="hidden lg:block">
            <NavLink
              to="/add-job"
              className="flex items-center bg-black text-white inline-block rounded-secondaryBorder px-3 py-2"
            >
              <img className="mr-2" src={git} />
              support us
            </NavLink>
          </div>
          <div className="menu-toggler block lg:hidden">
            <button
              id="menu-btn"
              className={`hamburger focus:outline-none ${isOpen ? "open" : ""}`}
              onClick={handleMenuClick}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
