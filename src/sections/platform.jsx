import Tabpane from "../components/TabPane";
import PlatformCard from "../components/PlatformCard";
const platform = () => {

    return (
        <section id="platform" className="border-b border-lightGreyText pt-[75px] pb-[75px] md:pt-[150px] md:pb-[150px]">
            <div className="container px-3 mx-auto md:space-y-0 md:px-6">
                <h2 className="text-2xl font-normal text-center mb-[20px] md:text-5xl md:mb-[40px]">A platform to benefit the entire team</h2>
                <div className="app">
                    <Tabpane>
                        <div title="Product Teams">
                            <div className="flex flex-wrap">
                                <div className="w-full px-[8px] mb-[20px] xl:w-1/3 md:w-1/2">
                                    <PlatformCard
                                        title="Straight from code to production "
                                        description="Identify issues, misconfigurations, lack of 
                                        resources, and failed deploys, and resolve 
                                        with rollbacks."
                                    />
                                </div>
                                <div className="w-full px-[8px] mb-[20px] xl:w-1/3 md:w-1/2">
                                    <PlatformCard
                                        title="Troubleshoot blazingly fast"
                                        description="Identify issues, misconfigurations, lack of 
                                        resources, and failed deploys, and resolve 
                                        with rollbacks."
                                    />
                                </div>
                                <div className="w-full px-[8px] mb-[20px] xl:w-1/3 md:w-1/2">
                                    <PlatformCard
                                        title="Unmatched Developer Experience"
                                        description="Provide developers with a powerful platform 
                                        that fits their workflows with a robust CLI 
                                        and Dashboard."
                                    />
                                </div>
                            </div>
                        </div>
                        <div title="DevOps/Platform Teams">
                            <div className="flex flex-wrap">
                            <div className="w-full px-[8px] mb-[20px] xl:w-1/3 md:w-1/2">
                                    <PlatformCard
                                        title="Unmatched Developer Experience"
                                        description="Provide developers with a powerful platform 
                                        that fits their workflows with a robust CLI 
                                        and Dashboard."
                                    />
                                </div>
                                <div className="w-full px-[8px] mb-[20px] xl:w-1/3 md:w-1/2">
                                    <PlatformCard
                                        title="Troubleshoot blazingly fast"
                                        description="Identify issues, misconfigurations, lack of 
                                        resources, and failed deploys, and resolve 
                                        with rollbacks."
                                    />
                                </div>
                                <div className="w-full px-[8px] mb-[20px] xl:w-1/3 md:w-1/2">
                                    <PlatformCard
                                        title="Straight from code to production "
                                        description="Identify issues, misconfigurations, lack of 
                                        resources, and failed deploys, and resolve 
                                        with rollbacks."
                                    />
                                </div>
                            </div>
                        </div>
                        <div title="Engineering Leaders">
                            <div className="flex flex-wrap">
                            <div className="w-full px-[8px] mb-[20px] xl:w-1/3 md:w-1/2">
                                    <PlatformCard
                                        title="Straight from code to production "
                                        description="Identify issues, misconfigurations, lack of 
                                        resources, and failed deploys, and resolve 
                                        with rollbacks."
                                    />
                                </div>
                                <div className="w-full px-[8px] mb-[20px] xl:w-1/3 md:w-1/2">
                                    <PlatformCard
                                        title="Troubleshoot blazingly fast"
                                        description="Identify issues, misconfigurations, lack of 
                                        resources, and failed deploys, and resolve 
                                        with rollbacks."
                                    />
                                </div>
                                <div className="w-full px-[8px] mb-[20px] xl:w-1/3 md:w-1/2">
                                    <PlatformCard
                                        title="Unmatched Developer Experience"
                                        description="Provide developers with a powerful platform 
                                        that fits their workflows with a robust CLI 
                                        and Dashboard."
                                    />
                                </div>
                            </div>
                        </div>
                    </Tabpane>
                </div>
            </div>
        </section>
    )
}

export default platform