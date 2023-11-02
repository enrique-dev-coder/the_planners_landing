import React from "react";
import { Union } from "./Icons";

const TeamCard = ({
  imgLink,
  name,
  job,
}: {
  imgLink: string;
  name: string;
  job: string;
}) => {
  return (
    <div className="col-span-3 mt-[72px] mb-[60px] gap-4 group cursor-pointer relative">
      <div className="w-[289px]  h-[289px] bg-dark-main-text rounded-3xl absolute" />
      <div
        style={{
          backgroundImage: `url(${imgLink})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-[289px] grayscale  rounded-3xl  h-[289px] group-hover:grayscale-0 transition-all ease-in-out"
      ></div>
      {/* <Image width={390} height={540} src={imgLink} alt={boda} /> */}
      <div className=" px-6 flex flex-col gap-2   mt-2 text-dark-main-text">
        <div className="flex items-center gap-2">
          <Union />
          <h3 className="text-xl font-bold">{name}</h3>
        </div>
        <p className="text-xl">{job}</p>
      </div>
    </div>
  );
};

export default TeamCard;
