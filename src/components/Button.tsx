import React from "react";

const Button = ({ name }: { name: string }) => {
  return (
    <div className="flex justify-end">
      <button
        className=" text-bright-yellow border hover:bg-soft-yellow hover:text-dark-main-bg 
       transition-all duration-100 ease-linear
      border-bright-yellow  px-11 py-2 rounded-3xl text-xl font-bold"
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
