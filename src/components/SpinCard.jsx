import { NavLink } from "react-router-dom";
import arrowRight from "../assets/images/arrow-right.svg"

const SpinCard = (props) => {
    const { title, description, btnTitle } = props
    return (
        <div className="px-[24px] pt-[40px] pb-[30px]">
            <h4 className="text-lg text-secondaryText mb-[22px]">{title}</h4>
            <p className="text-md text-primaryText mb-[40px]">{description}</p>
            <NavLink className="inline-flex items-center justify-between bg-secondaryText pt-2 pb-2 px-5 rounded-secondaryBorder">
                <span className="text-white font-medium">{btnTitle}</span>
                <img className="ml-3 h-auto w-auto" src={arrowRight} />
            </NavLink>
        </div>
    )
}

export default SpinCard