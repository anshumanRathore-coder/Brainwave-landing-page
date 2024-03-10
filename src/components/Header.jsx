import { brainwave } from "../assets";
import Button from "./Button";
import { navigation } from "../constants/index";
import { useLocation } from "react-router-dom";
import { HamburgerMenu } from "./design/Header";
import MenuSvg from "../assets/svg/MenuSvg";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleHamburger = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    toggleHamburger();
  };
  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 p-5 lg:p-3 lg:bg-n-8/90 lg:backdrop-blur-sm ${
          openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
      >
        <div className={`flex items-center max-lg:justify-between   `}>
          <a href="#hero" className="w-[12rem]">
            <img src={brainwave} height={40} width={140} alt="brainwave" />
          </a>
          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex  lg:bg-transparent  lg:flex-1`}
          >
            <div
              className={`relatiev w-full z-2 flex flex-col justify-around items-center lg:flex-row lg:justify-evenly`}
            >
              {navigation.map((item) => (
                <a
                  onClick={handleClick}
                  key={item.title}
                  href={item.url}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <HamburgerMenu />
          </nav>

          <div className="hidden lg:block space-x-5 ">
            <a href="#login">New Account</a>
            <Button className="p-3">Sign in</Button>
          </div>
          <div className="block lg:hidden">
            <Button className="px-3" onClick={toggleHamburger}>
              <MenuSvg openNavigation={openNavigation} />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
