import React from "react";
import Section from "../components/Section";
import Heading from "../components/Heading";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "../components/Button";
import { brainwaveSymbol, check } from "../assets";
import { RightCurve, LeftCurve } from "../components/design/Collaboration";

const Collobration = () => {
  return (
    <Section crossesOffset className="-mt-[5.25rem]">
      <div className="container relative">
        <Heading className="" title="AI Chat App for seamless collaboration" />
        <div className="flex flex-col lg:flex-row w-full p-5">
          <div className="relative">
            <ul>
              {collabContent.map((item) => (
                <li key={item.id} className="mb-6 md:max-w-[30rem]">
                  <div className="flex gap-10">
                    <img src={check} alt="check" />
                    <p>{item.title}</p>
                  </div>
                  {item.text && (
                    <p className="body-2 mt-4 max-w-[20rem] text-n-2">
                      {item.text}
                    </p>
                  )}
                </li>
              ))}
            </ul>
            <Button className="uppercase p-5 mt-10 mb-5">Try it now</Button>
          </div>

          <div className="flex flex-col ml-auto">
            <div>
              <p className="body-2 text-n-2 lg:max-w-[30rem] ">
                With smart automation and top-notch security, it's the perfect
                solution for teams looking to work smarter
              </p>
            </div>
            <div className="mt-10 flex relative left-1/2 -translate-x-1/2 w-[22rem] aspect-square border border-n-7 rounded-full scale-75 md:scale-100 ">
              <div className="w-60 m-auto  flex aspect-square border rounded-full border-n-7">
                <div className="w-[6rem] m-auto aspect-square bg-conic-gradient rounded-full p-[0.2rem]">
                  <div className="flex items-center justify-center w-full h-full rounded-full bg-n-8">
                    <img
                      width={48}
                      height={48}
                      src={brainwaveSymbol}
                      alt="brainwave"
                    />
                  </div>
                </div>
              </div>
              <ul className="">
                {collabApps.map((item) => (
                  <li
                    key={item.id}
                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                      item.id * 45
                    }`}
                  >
                    <div
                      className={`m-auto flex justify-center w-[3.2rem] h-[3.2rem] p-2 relative -top-[0.8rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                        45 * item.id
                      }`}
                    >
                      <img
                        src={item.icon}
                        alt={item.title}
                        width={item.width}
                        height={item.height}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <LeftCurve />
              <RightCurve />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collobration;
