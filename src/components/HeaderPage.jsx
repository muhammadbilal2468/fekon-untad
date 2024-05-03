import React from "react";
import { headerImg } from "../assets";

const HeaderPage = (props) => {
  return (
    <div className="relative w-full xl:h-80 h-36">
      <img
        src={headerImg}
        className="w-full h-full absolute"
        style={{ filter: "brightness(0.6)" }}
        alt=""
      />
      <h1 className="absolute xl:bottom-9 bottom-3 xl:right-32 right-4 xl:text-4xl text-2xl text-primary font-bold">
        {props.title}
      </h1>
      <h1 className="absolute xl:bottom-10 bottom-4 xl:right-32 right-4 xl:text-4xl text-2xl text-white font-bold">
        {props.title}
      </h1>
    </div>
  );
};

export default HeaderPage;
