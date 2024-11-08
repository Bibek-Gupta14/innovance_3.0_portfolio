import React, { useEffect, useState } from "react";
import { userData } from "../../../data/data";
// import { motion } from "framer-motion";

export const CallBruno = () => {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setHover(false);
  }, []);

  return (
    <div className="m-auto w-fit font-imfell relative">
      <div
        className={`border-gray-300 border-[3px] border-dashed rounded-full w-[272px] h-[272px] md:w-80 md:h-80 absolute ${
          !hover ? "animate-spin" : "animate-none"
        } transition-all`}
      ></div>
      <div
        className="bg-transparent rounded-full w-[272px] h-[272px] md:w-80 md:h-80 flex flex-col justify-center items-center z-10 relative hover:scale-105 transition-all duration-700"
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <div>
          <div className="text-gray-400 font-montserrat text-xs font-semibold">
            DESCRIBE YOUR
          </div>
          <div className="text-gray-400 font-montserrat text-xs font-semibold">
            PROJECT
          </div>
          <div className="text-4xl md:text-5xl">Call</div>
          <div className="text-4xl md:text-5xl">{userData.name}</div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/2223/2223606.png"
            alt="arrow"
            className="w-8 md:w-11 pt-4 md:pt-6"
          />
        </div>
      </div>
    </div>
  );
};
