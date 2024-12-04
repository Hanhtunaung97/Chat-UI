import React from "react";

const ChatButtonGroup = () => {
  return (
    <div className="flex justify-between items-center">
      <button className="text-white  bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded text-sm px-4 py-2 w-auto dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 flex items-center gap-2">
        Meeting
      </button>
      <button className="text-neutral-900  bg-neutral-100 hover:text-white hover:bg-neutral-600 focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded text-sm px-4 py-2 w-auto dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800 flex items-center gap-2">
        Schedule
      </button>
    </div>
  );
};

export default ChatButtonGroup;
