import { useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import Weather from "../components/Weather";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <Navbar toggleSidebar={toggleSidebar} /> */}
      {/* <SideBar isOpen={isOpen} /> */}
      {/* <Outlet /> */}
      {/* <ToastContainer /> */}
      {/* <Footer /> */}
      <Weather />
    </>
  );
};

export default MainLayout;
