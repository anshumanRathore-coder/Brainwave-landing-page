import React from "react";
import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notify = ({ classname }) => {
  return (
    <div className={`${classname || ""} flex items-center rounded-lg gap-6`}>
      <img
        src={notification1}
        alt="notifation"
        height={50}
        width={54}
        className="rounded-xl"
      />
      <div className="flex-1">
        <div className="flex flex-col">
          <p className="b-1">Code generation</p>
          <div className="flex items-center justify-between gap-2">
            {notificationImages.map((image, index) => (
              <img
                className="rounded-full"
                key={index}
                src={image}
                width={20}
                height={19}
              />
            ))}
            <p className=" text-n-2 text-xs">1 min ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notify;
