"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import LogoWhite from "../../public/img/logo_white.png";
import LogoYellow from "../../public/img/logo_yellow.jpg";
import { motion, useCycle } from "framer";

const navLinks = [
  {
    id: 1,
    title: "About us",
  },
  {
    id: 2,
    title: "Servicios",
  },
  {
    id: 3,
    title: "Referencias",
  },
  {
    id: 4,
    title: "Contacto",
  },
  {
    id: 5,
    title: "Trabajo",
  },
];

const variants = {
  open: { opacity: 1, height: 160, width: 120 },
  closed: { opacity: 0, x: "100%" },
};
const Navbar = () => {
  const [scrollNum, setScrollNum] = useState<number>(0);
  const [showBar, setShowBar] = useState<boolean>(false);
  const [displayMenuButton, setDisplayMenuButton] = useState<boolean>(true);
  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    window.addEventListener("scroll", (e) => setScrollNum(window.scrollY));
    if (scrollNum > 150) {
      setShowBar(true);
    } else {
      setShowBar(false);
    }
  }, [scrollNum]);

  return (
    <>
      <nav className=" flex justify-between items-center py-4 px-6  mb-4 border border-dark-main-text  rounded-3xl">
        {/*img container*/}
        <div>
          <Image src={LogoWhite} alt="The planners" width={187} />
        </div>
        {/*links*/}
        <div>
          <ul className="flex">
            {navLinks.map((item) => {
              return (
                <li
                  key={item.id}
                  className=" cursor-pointer m-2 text-dark-main-text text-xl  hover:border-b-[1px] transition-all "
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
        {/*button*/}
        <div>
          <button className="px-10  py-2 bg-bright-yellow text-dark-main-bg rounded-lg font-bold  text-xl">
            Contacto
          </button>
        </div>
      </nav>
      {/* navbar for scroll*/}
      {showBar ? (
        <div className="fixed top-0 z-[1000] pt-4 max-w-[1200px] w-full flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Image
              width={80}
              src={LogoYellow}
              alt="The planners"
              className=" rounded-full"
            />
          </motion.div>

          <motion.ul
            className=" bg-bright-yellow mt-2  text-center rounded-3xl "
            initial={{ opacity: 0, height: 0, width: 0 }}
            variants={variants}
            transition={{
              type: "spring",
              stiffness: 50,
              restDelta: 1000,
              duration: 0.05,
            }}
            animate={isOpen ? "open" : "closed"}
          >
            {navLinks.map((item) => {
              return (
                <li className=" font-semibold" key={item.id}>
                  {item.title}
                </li>
              );
            })}
            <button
              className=" bg-dark-main-bg text-dark-main-text font-light rounded-full w-8 h-8"
              onClick={() => {
                toggleOpen();
                setDisplayMenuButton(true);
              }}
            >
              X
            </button>
          </motion.ul>

          {displayMenuButton && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button
                className=" bg-bright-yellow  text-lg font-bold px-3 rounded-3xl flex items-center"
                onClick={() => {
                  toggleOpen();
                  setDisplayMenuButton(false);
                }}
              >
                <div className=" w-2 h-2 bg-dark-main-bg rounded-full mx-1 mt-1" />
                menu
              </button>
            </motion.div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
