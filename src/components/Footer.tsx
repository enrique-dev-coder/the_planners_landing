"use client";
import React from "react";
import { motion } from "framer";

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

const Footer = () => {
  return (
    <>
      {/*banner*/}
      <motion.div
        animate={{ y: 300 }}
        transition={{ duration: 1 }}
        whileInView={{ y: 0 }}
        className=" relative"
      >
        {/* <div className="h-[323px] w-[40px] absolute bg-bright-yellow left-0 bottom-0  rounded-tl-full -translate-x-[39px] "></div>
      <div className="h-[323px] w-[40px] absolute overflow-auto    bg-bright-yellow right-0 translate-x-[39px] rounded-tr-full"></div> */}
        <div className=" h-[323px] flex justify-center bg-bright-yellow   rounded-t-[80px] ">
          <div className=" max-w-[1200px] w-full mx-auto  col-span-8  flex items-center">
            <h2 className=" w-[90%] text-8xl font-bold ">
              Ready to work with us?
            </h2>
          </div>
        </div>
      </motion.div>
      {/*footer*/}
      <div className="max-w-[1200px] mx-auto">
        <ul className="flex flex-col my-10">
          {navLinks.map((item) => {
            return (
              <li
                key={item.id}
                className=" cursor-pointer m-2 text-dark-main-text text-xl  transition-all "
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Footer;
