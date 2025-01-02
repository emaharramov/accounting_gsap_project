import React from "react";

const StateAffairItem = ({ number, title }) => {
  return (
    <div className="bg-[#F4F7FA] px-[10px] flex flex-col h-[193px] text-center rounded-[40px] justify-center items-center">
      <p className="text-[34px] font-bold leading-[37.4px] align-baseline tracking-[-1.02px]">
        {number}+
      </p>
      <p className="text-[16px] align-baseline mt-2">{title}</p>
    </div>
  );
};

export default StateAffairItem