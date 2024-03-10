import React from "react";

const Heading = ({ className, title, text }) => {
  return (
    <div
      className={`${
        className || ""
      } md:h3 lg:h2  max-w-[23rem] lg:max-w-[50rem] mb-10`}
    >
      {title && <h5 className="h2">{title}</h5>}
      {text && <p className="body-2 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
