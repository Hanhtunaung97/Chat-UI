import React from "react";
import { LuCheckCheck } from "react-icons/lu";
const ChatUserList = ({ user: { id, username, profileImage, address } }) => {
  // console.log(user);
  return (
    <div className="flex flex-col gap-3  hover:shadow duration-200 px-2 cursor-pointer">
      <div className="flex items-center gap-x-2 ">
        <div className="relative">
          <img
            src={profileImage}
            className=" object-contain object-top rounded-full h-8  inline-block"
          />
          <span className="w-2 h-2 bg-green-500 rounded-full absolute -bottom-0.5 right-0 left-0 mx-auto" />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center">
            <h4 className="text-neutral-900 text-sm font-semibold">
              {username}
            </h4>
            <span className="w-3 h-3 inline-block bg-rose-500 rounded-full text-[8px] text-center text-white ">
              2
            </span>
          </div>
          <p className="text-xs text-neutral-500">{address}</p>
          <div className="flex justify-between items-end">
            <p className="text-black font-semibold text-[8px]">
              Dec 12 2022 <span className="ml-2">10:40 AM</span>
            </p>
            <LuCheckCheck className="w-4 h-4 text-indigo-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUserList;
