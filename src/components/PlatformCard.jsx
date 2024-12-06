import tick from "../assets/images/tick.svg"

const PlatformCard = (props) => {

    const { title, description } = props
    return (
        <div className="bg-white border rounded-primaryBorder border-mercuryGrey p-[24px]">
            <img className="mb-[20px]" src={tick} />
            <h4 className="text-lg text-secondaryText mb-[22px]">{title}</h4>
            <p className="text-md text-primaryText">{description}</p>
        </div>
    )
}

export default PlatformCard