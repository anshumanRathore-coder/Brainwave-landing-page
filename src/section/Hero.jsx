import React from "react";
import { curve, heroBackground, robot } from "../assets";
import Button from "../components/Button";
import Section from "../components/Section";
import {
  Gradient,
  BackgroundCircles,
  BottomLine,
} from "../components/design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "../constants";
import Generating from "../components/Generating";
import Notify from "../components/Notify";
import CompanyLogos from "../components/CompanyLogos";
const Hero = () => {
  return (
    <Section id="hero" className="px-4  -mt-[5.25rem]">
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem]   mx-auto  text-center mb-[6rem]">
          <h1 className="h1 mb-6 ">
            Explore the Possibilities of AI Chatting with{" "}
            <span className="relative inline-block">
              Brainwave{" "}
              <img
                width={300}
                height={38}
                className="absolute top-full left-5"
                src={curve}
                alt="curve"
              />
            </span>
          </h1>
          <p className="body-1  max-w-3xl mx-auto mb-6  text-n-1/50">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href="/" className="px-7" white={true}>
            Get Started
          </Button>
        </div>
        <div className="relative max-w-[23rem] md:max-w-5xl xl:mb-10 mx-auto  ">
          <div className="relative z-1 p-0.5 bg-conic-gradient rounded-2xl ">
            <div className="bg-n-8 rounded-[1rem] relative">
              <div className="bg-n-10 rounded-t-[0.9rem] h-[1.4rem] relative " />
              <div className="aspect-[33/40] md:aspect-[698/490] lg:aspect-[1024/490] overflow-hidden rounded-b-[0.9rem] ">
                <img
                  src={robot}
                  height={490}
                  width={1024}
                  alt="Ai"
                  className="w-full scale-[1.7] md:scale-[1] -translate-y-[8%] lg:-translate-y-[23%]"
                />
                <Generating />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden rounded-xl backdrop-blur absolute bg-n-9/40 border-n-1/40 bottom-[7.5rem] -left-[5.5rem] lg:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} alt="icon" width={24} height={25} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notify classname="hidden lg:flex absolute p-5 -right-[5.5rem] bg-n-9/40 bottom-[5rem]" />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div>
            <img
              width={1440}
              height={1880}
              src={heroBackground}
              alt="hero"
              className="absolute -top-[54%] md:-top-[46%] lg:-top-[100%] left-1/2 -translate-x-1/2 w-[223%]"
            />
          </div>
          <BackgroundCircles />
        </div>
      </div>
      <CompanyLogos />
      <BottomLine />
    </Section>
  );
};

export default Hero;
