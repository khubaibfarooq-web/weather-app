import { NavLink } from "react-router-dom";
import whiteLogo from "../assets/images/web-logo-white.svg"

const SideBar = ({ isOpen }) => {


    const LinkClass = ({ isActive }) =>
        isActive ?
            'bg-black block w-full text-white rounded-[12px] px-3 py-2 border border-darkGrey hover:bg-lightBlack hover:text-white'
            : 'text-veryLightGrey block w-full rounded-[12px] px-3 py-2 hover:bg-lightBlack hover:text-white';

    return (
        <div className={`z-10 bg-dullBlack  rounded-tr-[12px] fixed top-[58px] left-0 bottom-0 w-[300px] p-6 transition-transform duration-700 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="mb-[40px]">
                    <img src={whiteLogo}/>
            </div>
            <ul>
                <li className="mb-[15px]">
                    <NavLink className={LinkClass} to="/">
                        Home
                    </NavLink>
                </li>
                <li className="mb-[15px]">
                    <NavLink className={LinkClass} to="/pricing">
                        Pricing
                    </NavLink>
                </li>
                <li className="mb-[15px]">
                    <NavLink className={LinkClass} to="/about">
                        About
                    </NavLink>
                </li>
                <li className="mb-[15px]">
                    <NavLink className={LinkClass} to="/community">
                        Community
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;
