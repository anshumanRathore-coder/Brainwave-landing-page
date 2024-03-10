import React from "react";
import { loading } from "../assets";

const Generating = () => {
  return (
    <div className="flex gap-5 absolute p-5   h-[3.5rem] px-6 md:w-[32rem]  bottom-5 md:bottom-8 left-4 right-4   bg-n-8/80 items-center  rounded-[1.7rem] text-base md:left-1/2 md:right-auto md:-translate-x-1/2">
      <img src={loading} alt="loader" width={40} height={30} />
      <p className="">AI is Genrating</p>
    </div>
  );
};

export default Generating;
