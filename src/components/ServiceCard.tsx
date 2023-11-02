import React from "react";

const ServiceCard = ({
  serviceNumber,
  serviceDesc,
  emojiLink,
}: {
  serviceNumber: string;
  serviceDesc: string;
  emojiLink: string;
}) => {
  return (
    <div className="col-span-3 my-[54px] flex flex-col gap-4 ">
      <div>
        {/*emoji*/}
        <h2 className=" text-bright-yellow  text-[34px] font-bold">
          {serviceNumber}
        </h2>
      </div>
      <div className="w-full h-[1px] bg-bright-yellow" />
      <h3 className=" text-dark-main-text  text-[40px] leading-10">
        {serviceDesc}
      </h3>
    </div>
  );
};

export default ServiceCard;
