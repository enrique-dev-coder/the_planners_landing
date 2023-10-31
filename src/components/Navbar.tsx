import React from "react";
import Image from "next/image";
import LogoWhite from "../../public/img/logo_white.png";

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

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
