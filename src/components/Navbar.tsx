"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import LogoWhite from "../../public/img/logo_white.png";
import LogoYellow from "../../public/img/logo_yellow.jpg";
import { motion, useCycle } from "framer";
import Link from "next/link";

const navLinks = [
  {
    id: 1,
    title: "About us",
    link: "#about-us",
  },
  {
    id: 2,
    title: "Servicios",
    link: "#works",
  },
  {
    id: 3,
    title: "Referencias",
    link: "#reviews",
  },
  {
    id: 4,
    title: "Contacto",
    link: "#about-us",
  },
  {
    id: 5,
    title: "Trabajo",
    link: "#about-us",
  },
];

const variants = {
  open: { opacity: 1, height: 160, width: 120 },
  closed: { opacity: 0, x: "100%" },
};

const ulVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
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
                <Link
                  key={item.id}
                  href={item.link}
                  scroll
                  className="relative group"
                >
                  <li
                    className="cursor-pointer m-2 text-dark-main-text text-xl transition-all duration-100 ease-in-out 
                  hover:text-bright-yellow hover:underline hover:decoration-wavy  hover:decoration-bright-yellow hover:underline-offset-2 "
                  >
                    {item.title}
                  </li>
                  {/*changed style*/}
                  {/* <div className=" transition-all  duration-500 w-0 group-hover:w-[80%]  h-[2px]  bg-dark-main-text absolute  bottom-0  translate-x-3 -translate-y-1" /> */}
                </Link>
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

          <motion.div
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
            <motion.ul variants={ulVariants}>
              {navLinks.map((item) => {
                return (
                  <motion.li
                    variants={liVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className=" cursor-pointer font-semibold"
                    key={item.id}
                  >
                    {item.title}
                  </motion.li>
                );
              })}
              <motion.button
                variants={liVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className=" bg-dark-main-bg text-dark-main-text font-light rounded-full  w-6 h-6"
                onClick={() => {
                  toggleOpen();
                  setDisplayMenuButton(true);
                }}
              >
                X
              </motion.button>
            </motion.ul>
          </motion.div>

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
