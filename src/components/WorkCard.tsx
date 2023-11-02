import React from "react";
import { Tira } from "./Icons";

const WorkCard = ({
  imgLink,
  boda,
  lugar,
  year,
}: {
  imgLink: string;
  boda: string;
  lugar: string;
  year: string;
}) => {
  return (
    <div className="col-span-4  mt-[72px] gap-4 group cursor-pointer">
      <div
        style={{
          backgroundImage: `url(${imgLink})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-[390px] group grayscale relative rounded-3xl cursor- h-[540px] group-hover:grayscale-0 transition-all ease-in-out"
      >
        <Tira className="grayscale-0! opacity-0  group-hover:opacity-100 transition-all absolute top-0 left-0  -translate-x-3 -translate-y-3" />
        <Tira className="grayscale-0! opacity-0  group-hover:opacity-100 transition-all absolute  bottom-0 right-0  translate-x-3 translate-y-2" />
      </div>
      <div className=" px-6 flex flex-col gap-2   mt-2 text-dark-main-text">
        <h3 className=" text-2xl font-bold">{boda}</h3>
        <p>{lugar}</p>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default WorkCard;
