import React from "react";

interface ServiceCardV2Props {
  iconElement: React.ReactNode;
  numberService: string;
  service: string;
}

const ServiceCardV2 = ({
  iconElement,
  numberService,
  service,
}: ServiceCardV2Props) => {
  return (
    <div className="col-span-2 flex flex-col items-center mt-10 mb-[60px]">
      <div className=" bg-bright-yellow w-[120px] h-[120px] flex flex-col items-center justify-center rounded-[40px]">
        {iconElement}
      </div>
      <div>
        <p className=" my-2 text-bright-yellow text-center text-base">
          {numberService}
        </p>
        <p className=" text-dark-main-text text-center  text-xl">{service}</p>
      </div>
    </div>
  );
};

export default ServiceCardV2;
