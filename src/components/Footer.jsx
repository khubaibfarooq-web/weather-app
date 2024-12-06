import { NavLink } from "react-router-dom";
import community from "../assets/images/community.png";
import slac from "../assets/images/slac.svg";
import gitSm from "../assets/images/git-sm.svg";
import logoWhite from "../assets/images/web-logo-white.svg";
import git from "../assets/images/icon-1.svg";
import twitter from "../assets/images/icon-2.svg";
import linkedin from "../assets/images/icon-3.svg";
import slac2 from "../assets/images/icon-4.svg";
const Footer = () => {
  return (
    <section className="bg-secondaryText pt-[80px]">
      <div className="container px-3 mx-auto md:px-6">
        <div className="flex flex-wrap items-center bg-lightBlack rounded-[24px] px-[40px] py-[20px]">
          <div className="w-full xl:w-1/2">
            <h2 className="text-2xl text-white text-center font-normal mb-[24px] md:text-4xl xl:text-left">
              Join our Community
            </h2>
            <div className="flex flex-col justify-center items-center xl:justify-start xl:items-start xl:flex-row">
              <NavLink className="inline-flex items-center justify-between bg-white pt-2 pb-2 px-4 rounded-[12px] border border-lightGreyText">
                <span className="font-medium mr-3">Join ou Slac</span>
                <img className="h-auto w-auto" src={slac} />
              </NavLink>
              <NavLink className="inline-flex items-center justify-between pt-2 pb-2 px-5 rounded-secondaryBorder mb-3 mr-2 md:mb-0 md:mr-3 ">
                <img className="mr-3" src={gitSm} />
                <span className="text-white font-medium">
                  Star us on Github
                </span>
              </NavLink>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex justify-center xl:justify-end">
            <img src={community} />
          </div>
        </div>
        <div className="border-b border-darkGrey pt-[60px] pb-[40px] md:pt-[124px]">
          <div className="flex flex-wrap items-start">
            <div className="w-full mb-[20px] xl:w-1/2 xl:mb-0">
              <div className="mb-[24px]">
                <img src={logoWhite} />
              </div>
              <div className="flex">
                <img src={git} className="mr-[8px]" />
                <img src={twitter} className="mr-[8px]" />
                <img src={linkedin} className="mr-[8px]" />
                <img src={slac2} />
              </div>
            </div>
            <div className="w-full xl:w-1/2">
              <div className="bg-lightBlack rounded-[24px] p-[24px]">
                <p className="text-slateGrey mb-[24px]">
                  Sign up for our newsletter and join the growing Rig.dev
                  community.
                </p>
                <form>
                  <div class="flex items-start flex-wrap flex-col lg:gap-2 md:gap-3 md:flex-row">
                    <input
                      type="text"
                      placeholder="First name"
                      class="w-full placeholder-white flex-1 bg-dullBlack border border-darkGrey text-white px-4 py-2 rounded-[9px] focus:outline-none focus:border-darkMercuryGrey"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      class="w-full placeholder-white flex-1 mt-[20px] mb-[20px] bg-dullBlack border border-darkGrey text-white px-4 py-2 rounded-[9px] focus:outline-none focus:border-darkMercuryGrey md:mb-[0px] md:mt-[0px]"
                    />
                    <button class="w-full flex-1 flex justify-center bg-white pt-2 pb-2 px-4 rounded-secondaryBorder border border-lightGreyText">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-rights pt-[40px] pb-[40px]">
          <ul className="text-primaryText flex flex-wrap gap-4 justify-center xl:justify-start">
            <li>
              <span>© 2023 Rig.Dev ApS</span>
            </li>
            <li>
              <span>Terms of Services</span>
            </li>
            <li>
              <span>Privacy & Cookies policy</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
