import Card from "../components/Card";
import k81 from "../assets/images/k8-1.png";
import k82 from "../assets/images/k8-2.png";
import k83 from "../assets/images/k8-3.png";

const kubernetes = () => {
    return (
        <section id="kubernetes" className="bg-dullGrey pt-[50px] pb-[50px] md:pt-[140px] md:pb-[150px]">
            <div className="container px-3 mx-auto md:space-y-0 md:px-6">
                <div className='text-center'>
                    <div className="text-md pt-1 pb-1 px-3 mb-[20px] bg-white border border-lightGreyText rounded-full inline-flex items-center justify-center">
                        Fixing K8 complexity
                    </div>
                    <h2 className="max-w-4xl mx-auto text-2xl font-normal text-center mb-[25px] md:mb-[50px] md:text-5xl">Don’t let the complexity of Kubernetes leak into your engineering team</h2>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full px-[10px] mb-[20px] xl:w-1/3 md:w-1/2 md:mb-[20px]">
                        <Card 
                            imgSrc={k81}
                            title={'Abstract Away K8s Primitives'}
                            description={'Deploy, manage and debug applications with end-to-end ownership without experiencing bottlenecks or battling Kubernetes hurdles.'}
                        />
                    </div>
                    <div className="w-full px-[10px] mb-[20px] xl:w-1/3 md:w-1/2 md:mb-[20px]">
                    <Card 
                            imgSrc={k82}
                            title={'Proactively Troubleshoot'}
                            description={'Identify availability issues, misconfigurations, lack of resources, K8s anomalies and failed deploys w. feedback and health checks.'}
                        />
                    </div>
                    <div className="w-full px-[10px] mb-[20px] xl:w-1/3 md:w-1/2 md:mb-[20px]">
                    <Card 
                            imgSrc={k83}
                            title={'Developer Tools'}
                            description={'Robust tooling that encompass a CLI, an extensive developer-interfaces and cloud- native CI/CD integrations.'}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default kubernetes