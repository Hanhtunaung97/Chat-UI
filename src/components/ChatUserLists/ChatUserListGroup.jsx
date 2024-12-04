import React from "react";
import useSWR from "swr";
import { fetchChatUsers } from "../../services/chatGroup";
import ChatSearchBar from "./ChatSearchBar";
import ChatUserList from "./ChatUserList";
import ChatButtonGroup from "./ChatButtonGroup";

const ChatUserListGroup = () => {
  const { data, error, isLoading } = useSWR(
    "http://18.143.79.95/api/chatSystem/users/list",
    fetchChatUsers
  );
  // console.log(data);
  return (
    <div className="bg-white flex flex-col gap-4 rounded-lg p-4 ">
      <ChatSearchBar />
      {!isLoading && data.map((el) => <ChatUserList key={el.id} user={el} />)}
      <ChatButtonGroup />
    </div>
  );
};

export default ChatUserListGroup;
