import { NavLink } from "react-router-dom";
import arrowRight from "../assets/images/arrow-bk-right.svg"

const Metas = (props) => {

    const { img, pillTitle, title, description } = props
    return (
        <>
            <div className="mb-[10px] md:mb-[80px]">
                <div className="text-sm text-veryLightGrey text-md pt-1 pb-1 px-3 bg-lightBlack border border-darkGrey  rounded-full inline-flex items-center justify-center mb-[15px]">
                    <img src={img} className="mr-[10px]" />
                    {pillTitle}
                </div>
                <h3 className="text-white text-2xl font-normal mb-[20px] md:text-5xl">{title}</h3>
                <p className="text-md text-veryLightGrey w-full mb-[25px] md:max-w-3xl">{description}</p>
                <NavLink className="text-sm text-secondaryText text-md font-medium py-[8px] px-[20px] px-3 bg-white rounded-secondaryBorder inline-flex items-center justify-center mb-[15px]">
                    Explore Doumentation
                    <img className="ml-[10px]" src={arrowRight} />
                </NavLink>
            </div>


        </>
    )
}

export default Metas