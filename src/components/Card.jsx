const Card = ({ imgSrc , title , description }) => {
    return (
        <div className="border border-mediumGrey rounded-primaryBorder pb-[40px]">
            <div className="bg-white pt-[24px] pb-[32px] px-[24px] border-b border-mediumGrey rounded-primaryBorder">
                <img src={imgSrc} className="mb-[32px] w-full" />
                <h5 className="text-lg text-secondaryText mb-[24px] md:text-xl">{title}</h5>
                <p className="text-primaryText">{description}</p>
            </div>
        </div>
    )
}
export default Card