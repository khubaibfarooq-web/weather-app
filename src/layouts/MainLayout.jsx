import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
