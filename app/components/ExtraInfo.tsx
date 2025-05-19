import React from "react";
import { GrGroup } from "react-icons/gr";

const ExtraInfo = () => {
  return (
    <div className="ring-1 ring-gray-300 h-full bg-white p-5 rounded-lg w-full">
      <h4 className="font-bold">Active Users</h4>

      <div className="flex flex-col justify-center items-center gap-8 pb-4 border-b mt-6 border-gray-300">
        <GrGroup size="100px" />

        <p className="text-sm font-semibold">
          <span className="text-blue-500">7,890 </span>
          users are active
        </p>
      </div>

      <div className="flex flex-col justify-center my-4 items-center gap-1 pb-4">
        <p className="text-sm font-semibold">
          <span className="text-green-500">15%</span>
        </p>
        <p>From the last 25 days</p>
      </div>
    </div>
  );
};

export default ExtraInfo;
