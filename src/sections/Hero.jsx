import { NavLink } from "react-router-dom";
import arrowRight from "../assets/images/arrow-right.svg";
import gitBlack from "../assets/images/git-black.svg";
import google from "../assets/images/gogle.svg";
import aws from "../assets/images/aws.svg";
import cloud from "../assets/images/cloud.svg";
import stack from "../assets/images/stack.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-white pt-[80px] pb-[60px] md:pt-[160px] md:pb-[120px]"
    >
      <div className="container px-3 mx-auto md:px-6">
        <div className="flex flex-wrap items-center">
          <div className="px-[10px] order-2 md:order-2 xl:order-1 md:w-full xl:w-1/2">
            <div className="mb-[40px] md:mb-[124px]">
              <h1 className="max-w-xl text-2xl font-normal text-left mb-[12px] md:mb-[24px] md:text-5xl md:text-left">
                The application platform for Kubernetes
              </h1>
              <p className="max-w-md mb-[30px] md:mb-[28px]">
                Deploy, manage and troubleshoot cloud-native applications at
                scale without overwhelming your engineers with the complexity of
                Kubernetes.
              </p>
              <div className="flex flex-col flex-wrap items-start md:flex-row">
                <NavLink className="inline-flex items-center justify-between bg-secondaryText rounded-secondaryBorder pt-2 pb-2 px-5 mb-[15px]  md:mr-[15px] xl:mb-[0px] md:mb-[0px]">
                  <span className="text-white font-medium">Documentation</span>
                  <img className="ml-3 h-auto w-auto" src={arrowRight} />
                </NavLink>
                <NavLink className="inline-flex items-center justify-between bg-white pt-2 pb-2 px-4 rounded-secondaryBorder border border-lightGreyText">
                  <img className="mr-3 h-auto w-auto" src={gitBlack} />
                  <span className="font-medium">Get Started</span>
                </NavLink>
              </div>
            </div>
            <div>
              <p className="text-primaryText font-medium mb-[12px]">
                Compaitable with
              </p>
              <div className="flex flex-wrap space-x-2 ">
                <img src={google} className="mb-1 md:mb-0" alt="Google icon" />
                <img src={aws} className="mb-1 md:mb-0" alt="AWS icon" />
                <img src={cloud} alt="Cloud icon" />
              </div>
            </div>
          </div>
          <div className="px-[10px] order-1 mb-[40px] md:order-1 xl:order-2 xl:mb-[40px] md:w-full xl:w-1/2 ">
            <div className="flex justify-center">
              <img src={stack} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
