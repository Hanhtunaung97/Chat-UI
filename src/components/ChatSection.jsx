import React from "react";
import ChatUserListGroup from "./ChatUserLists/ChatUserListGroup";
import GroupLists from "./Groups/GroupLists";
import ChatInterface from "./Message/ChatInterFace";
import ChatUserDetailSection from "./ChatUserDetail/ChatUserDetailSection";

const ChatSection = () => {
  return (
    <div className="py-5  min-h-dvh">
      <div className=" rounded-lg dark:border-gray-700">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className=" col-span-full lg:col-span-1 gap-4 flex flex-col">
            <div className="grid grid-cols-2 gap-2">
              <ChatUserListGroup />
              <GroupLists />
            </div>
          </div>
          <div className=" col-span-full lg:col-span-2 rounded-lg bg-white">
            <div className="grid grid-cols-3">
              <ChatInterface />
              <ChatUserDetailSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
