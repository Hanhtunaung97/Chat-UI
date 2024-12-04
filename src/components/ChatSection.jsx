import React from "react";
import ChatUserListGroup from "./ChatUserLists/ChatUserListGroup";
import GroupLists from "./Groups/GroupLists";

const ChatSection = () => {
  return (
    <div className="py-5 sm:ml-10 min-h-dvh">
      <div className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className=" col-span-1 gap-4 flex flex-col">
            <ChatUserListGroup />
            <GroupLists />
          </div>
          <div className=" col-span-full gap-4 flex flex-col"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
