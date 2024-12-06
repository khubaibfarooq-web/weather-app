import convention from "../assets/images/convention.svg"
import Metas from "../components/Metas";
import DevCard from "../components/DevCard";
import FlexCard from "../components/FlexCard";
import TroubleCard from "../components/TroubleCard";
import auto from "../assets/images/auto.png";
import local from "../assets/images/local.png";
import build from "../assets/images/Builds.png";
import roll from "../assets/images/roll.png";
import rollouts from "../assets/images/rollouts.png";
import rollback from "../assets/images/rollback.png";
import integration from "../assets/images/integrations.png";
import cluster from "../assets/images/cluster.png";
import instances from "../assets/images/instances.png";
import logging from "../assets/images/logging.png";
import health from "../assets/images/health.png";


const developer = () => {
    return (
        <section id="developer" className='px-[10px] md:px-[40px]'>
            <div className="bg-dullBlack rounded-mediumBorder pt-[60px] pb-[10px]  md:pt-[120px] md:pb-[40px]">
                <div className="container mx-auto px-[15px] md:px-[30px]">
                    <Metas
                        img={convention}
                        pillTitle={'Convention over Configuration'}
                        title={'Developer-Friendly Kubernetes Abstractions'}
                        description={'Deploy and scale applications without battling the intricacies of K8s and spending valuable time configuring low-level K8s resources repeatedly.'}
                    />
                    <div className="flex flex-wrap mb-[40px] md:mb-[80px]">
                        <div className="w-full px-[10px] mb-[20px] xl:w-3/5 ">
                            <DevCard
                                imgSrc={auto}
                                className={`top-[55px] left-1/2 transform -translate-x-1/2 -translate-y-1/2]`}
                                title={'Autoscaler'}
                                description={'Seamlessly enable vertical- and horizontal autoscaling with CPU- & Memory limits, number of replicas & avg. CPU utilisation Targets.'}
                            />
                        </div>
                        <div className="w-full px-[10px] mb-[20px] xl:w-2/5">
                            <DevCard
                                imgSrc={local}
                                className={`top-[55px] left-1/2 transform -translate-x-1/2 -translate-y-1/2]`}
                                title={'Network Interfaces'}
                                description={'Manage Private and Public Network Interfaces and let Rig automatically handle the rest.'}
                            />
                        </div>
                        <div className="w-full px-[10px] mb-[20px] xl:w-2/5">
                            <DevCard
                                imgSrc={roll}
                                className={`top-[65px] right-0`}
                                title={'Environment Variables'}
                                description={'Automate configuring the low-level Kubernetes resources on both container and pod-level.'}
                            />
                        </div>
                        <div className="w-full px-[10px] mb-[20px] xl:w-3/5">
                            <DevCard
                                imgSrc={build}
                                className={`top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2]`}
                                title={'Config Files'}
                                description={'Our platform simplifies config files and their mounting.Don’t spend time changing low-level K8s resources.'}
                            />
                        </div>
                    </div>
                    <Metas
                        img={convention}
                        pillTitle={'Development'}
                        title={'Flexible and scalable Deployment Engine'}
                        description={'Deploy and manage any application on any cloud provider with Rig and Kubernetes. Rig enables developers to deploy well-configured applications in Kubernetes without the complexity.'}
                    />
                    <div className="flex flex-wrap mb-[40px] md:mb-[80px]">
                        <div className="w-full px-[8px] mb-[20px] md:w-1/2 xl:w-1/3">
                            <FlexCard
                                title={'Builds'}
                                description={'Immutable deployments of a new services w. automatic configurations of resources.'}
                                imgSrc={rollouts}
                            />
                        </div>
                        <div className="w-full px-[8px] mb-[20px] md:w-1/2 xl:w-1/3">
                            <FlexCard
                                title={'Rollouts & Rollbacks'}
                                description={'Deploy and update configurations with immutability and efficient Rollbacks.'}
                                imgSrc={rollback}
                            />
                        </div>
                        <div className="w-full px-[8px] mb-[20px] md:w-1/2 xl:w-1/3">
                            <FlexCard
                                title={'Integrations'}
                                description={'Integrate seamlessly into existing cloud-native deployment stacks.'}
                                imgSrc={integration}
                            />
                        </div>
                    </div>
                    <Metas
                        img={convention}
                        pillTitle={'Development'}
                        title={'Troubleshooting made simple'}
                        description={'Deploy and manage any application on any cloud provider with Rig and Kubernetes. Rig enables developers to deploy well-configured applications in Kubernetes without the complexity.'}
                    />
                   <div className="flex flex-wrap mb-[40px] md:mb-[80px]">
                        <div className="w-full px-[8px] mb-[20px] md:w-1/2 xl:w-1/4">
                            <TroubleCard
                                imgSrc={cluster}
                                title={'Cluster insights'}
                                description={'High-level access to cluster health, features and issues.'}
                            />
                        </div>
                        <div className="w-full px-[8px] mb-[20px] md:w-1/2 xl:w-1/4">
                            <TroubleCard
                                imgSrc={instances}
                                title={'Cluster insights'}
                                description={'Instance status and dependencies in one aggregated view.'}
                            />
                        </div>
                        <div className="w-full px-[8px] mb-[20px] md:w-1/2 xl:w-1/4">
                            <TroubleCard
                                imgSrc={logging}
                                title={'Cluster insights'}
                                description={'Stream combined Capsule logs across instances, directly from  the dashboard.'}
                            />
                        </div>
                        <div className="w-full px-[8px] mb-[20px] md:w-1/2 xl:w-1/4">
                            <TroubleCard
                                imgSrc={health}
                                title={'Health Checks'}
                                description={'Easily configure Liveness and Ready probes for Capsules.'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default developer