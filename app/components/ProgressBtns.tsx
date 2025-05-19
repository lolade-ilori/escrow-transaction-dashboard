import React from "react";

type Props = {
  progress: string;
};

const ProgressBtns = ({ progress }: Props) => {
  const statusStyles: Record<string, string> = {
    Pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
    Completed: "bg-green-100 text-green-800 hover:bg-green-200",
    Disputed: "bg-red-100 text-red-800 hover:bg-red-200",
  };

  return (
    <div>
      <div
        className={` w-[120px] flex justify-center px-3 py-1 rounded-xs font-medium transition ${statusStyles[progress]}`}
      >
        {progress}
      </div>
    </div>
  );
};

export default ProgressBtns;
