import React from "react";
import { companyLogos } from "../constants";

const CompanyLogos = () => {
  return (
    <div className="hidden lg:flex flex-col gap-20 items-center justify-center relative z-10 mt-20">
      <p className="text-xs text-n-1/50">
        {" "}
        HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT
      </p>

      <div className="flex justify-evenly w-full">
        {companyLogos.map((image, index) => (
          <img key={index} src={image} alt="logo" />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
