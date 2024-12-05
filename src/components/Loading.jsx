import React from "react";

const Loading = () => {
  return (
    <div className="h-[500px] flex justify-center items-center">
      <h1 className=" text-xl font-bold text-red-500 flex items-center">
        <span className=" text-blue-700">Loading...</span>
        <span className=" inline-block p-1 w-3 h-3 rounded-full border-4 border-blue-700 border-s-4 border-s-red-700 border-e-4 border-e-red-700  animate-spin"></span>
      </h1>
    </div>
  );
};

export default Loading;
