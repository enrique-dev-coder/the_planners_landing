import React from "react";

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
        className="w-[390px] grayscale  rounded-3xl cursor- h-[540px] group-hover:grayscale-0 transition-all ease-in-out"
      ></div>
      {/* <Image width={390} height={540} src={imgLink} alt={boda} /> */}
      <div className=" px-6 flex flex-col gap-2   mt-2 text-dark-main-text">
        <h3 className=" text-2xl font-bold">{boda}</h3>
        <p>{lugar}</p>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default WorkCard;
