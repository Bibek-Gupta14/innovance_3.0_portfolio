import React, { useState } from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import { motion, AnimatePresence } from "framer-motion";

import { navbar_details, navlinks } from "../../data/data";
import Divider from "../main/Divider";
import HamburgerButton from "./HamburgerButton";

export const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  const variants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 124 },
  };
  return (
    <div className="text-sm font-montserratBold font-black w-[70vw] m-auto">
      <div className="flex justify-between items-center z-50 relative py-6 bg-white">
        <div className="md:flex gap-7 hidden">
          {navlinks &&
            navlinks.map((navlink) => (
              <div>
                <a href={navlink.link} className="text-black no-underline">
                  {navlink.name}
                </a>
              </div>
            ))}
        </div>
        <div className="flex flex-col items-center gap-3">
          <div>
            <img src={navbar_details.logo} alt="logo" className="w-14" />
          </div>
          <div>{navbar_details.name}</div>
        </div>
        <div className="hidden md:block">
          <SocialMediaLinks />
        </div>
        <div className="md:hidden">
          <HamburgerButton isOpen={isOpened} toggleMenu={toggleMenu} />
        </div>
      </div>
      <div className="md:hidden">
        <Divider />
      </div>
      <AnimatePresence>
        {isOpened && (
          <div className="bg-white z-50 flex justify-center w-full">
            <motion.div
              key={"hamburger"}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              transition={{ duration: 0.5 }}
              className="p-4 md:hidden absolute top-0 left-0 bg-white w-full"
            >
              <div className="flex flex-col gap-7 md:gap-4 w-[70vw] m-auto">
                {navlinks &&
                  navlinks.map((navlink) => (
                    <div>
                      <a
                        href={navlink.link}
                        className="text-black no-underline"
                      >
                        {navlink.name}
                      </a>
                    </div>
                  ))}
                <SocialMediaLinks />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
