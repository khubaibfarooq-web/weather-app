import SpinCard from "../components/SpinCard"
const spin = () => {
    return (
        <section id="platform" className="pt-[60px] pb-[75px] md:pt-[120px] md:pb-[150px]">
            <div className="container px-3 mx-auto md:px-6">
                <h2 className="text-2xl font-normal mb-[20px] md:mb-[40px] md:text-5xl ">Ready to take Rig for a spin?</h2>
                <div className="flex flex-wrap bg-white border border-mediumGrey rounded-[16px]">
                    <div className="w-full md:w-1/2 px-[8px]">
                        <SpinCard
                            title={'Schedule a call'}
                            description={'We are gladly helping companies to get started.'}
                            btnTitle={'Schedule a Call'}
                        />
                    </div>
                    <div className="md:border-l md:border-mediumGrey w-full md:w-1/2 px-[8px]">
                        <SpinCard
                            title={'Try it out yourself'}
                            description={'We have made it as easy as possible to try Rig.'}
                            btnTitle={'Documentation'}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default spin