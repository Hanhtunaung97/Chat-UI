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
          <div className=" col-span-1 gap-4 flex flex-col">
            <ChatUserListGroup />
            <GroupLists />
          </div>
          <div className=" col-span-2 rounded-lg bg-white">
            <div className="flex h-full">
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
