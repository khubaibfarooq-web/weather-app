const FlexCard = (props) => {

    const { imgSrc, title, description } = props

    return (
        <div className="bg-lightBlack border rounded-primaryBorder border-darkGrey p-[24px]">
            <h4 className="text-lg text-white mb-[10px]">{title}</h4>
            <p className="text-md text-slateGrey mb-[42px]">{description}</p>
            <img className="block mx-auto" src={imgSrc} />
        </div>
    )
}

export default FlexCard