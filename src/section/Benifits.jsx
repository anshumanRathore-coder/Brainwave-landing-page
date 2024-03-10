import React from "react";
import Section from "../components/Section";
import Heading from "../components/Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "../components/design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
const Benifits = () => {
  return (
    <Section id="features" className="px-4">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-3xl mx-auto text-center"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        <div className="flex flex-wrap gap-20 bg-no-repeat">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="block relative z-2  p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[23rem]"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
            >
              <div className="relative z-2 flex flex-col min-h-[20rem] p-5 pointer-events-none">
                <div className="space-y-5">
                  <h5 className="h5">{item.title}</h5>
                  <p className="body-2">{item.text}</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <img src={item.iconUrl} alt="icon" />
                  <div className="flex ml-auto ">
                    <p>Expore More</p>
                    <Arrow />
                  </div>
                </div>
              </div>
              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10 ">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benifits;
