const TroubleCard = (props) => {
    const { imgSrc, title, description } = props
    return (
        <div className="bg-lightBlack border rounded-primaryBorder border-darkGrey p-[24px] min-h-md">
            <img className="mb-[24px]" src={imgSrc} />
            <h4 className="text-lg text-white mb-[22px]">{title}</h4>
            <p className="text-md text-slateGrey max-w-xs">{description}</p>
        </div>
    )
}

export default TroubleCard