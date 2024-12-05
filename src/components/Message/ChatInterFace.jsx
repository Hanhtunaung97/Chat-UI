import { useState, useEffect } from "react";
import {
  Search,
  MoreVertical,
  AtSign,
  Bold,
  Smile,
  ImageIcon,
  Paperclip,
  Send,
  PhoneCall,
  Video,
  Share2Icon,
} from "lucide-react";
import useSWR from "swr";
import { fetchChatUsers } from "../../services/chatGroup";
import userPhoto from "../../assets/image/userPhoto.png";

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [search, setSearch] = useState("");
  // fetch user
  const { data, error, isLoading } = useSWR(
    "http://18.143.79.95/api/chatSystem/user/3",
    fetchChatUsers
  );
  // fetch messages
  const fetchMessages = async () => {
    try {
      const res = await fetch(
        `http://18.143.79.95/api/chatSystem/chatByUserId/3`
      );
      const fetchedData = await res.json();
      // console.log(fetchedData);
      setMessages(fetchedData);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };
  // header search function
  const handleSearchInput = (e) => {
    const chat = e.target.value;
    setSearch(chat);
    if (chat) {
      searchMessage(chat);
    } else {
      fetchMessages();
    }
  };
  const searchMessage = (chat) => {
    if (!chat.trim()) {
      setMessages(messages);
      return;
    }
    const filtered = messages.filter((el) =>
      el.message.toLowerCase().includes(chat.toLowerCase())
    );
    setMessages(filtered);
  };

  // send message
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      fromUser: data.id,
      toUser: messages[0].fromUser,
      message: inputMessage,
      timestamp: new Date().toISOString(),
      image: data.profileImage,
    };
    // console.log(newMessage);
    setMessages([...messages, newMessage]);
    setInputMessage("");
    await fetch("http://18.143.79.95/api/chatSystem/chat/add", {
      method: "POST",
      body: JSON.stringify(newMessage),
    });

    // fetchMessages();
  };
  // useEffect fetch messages
  useEffect(() => {
    fetchMessages();
  }, []);
  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto bg-white rounded-lg">
      {/* Header */}
      {isLoading ? (
        <div className="h-[500px] flex justify-center items-center">
          <h1 className=" text-xl font-bold text-red-500 flex items-center">
            <span className=" text-blue-700">Loading...</span>
            <span className=" inline-block p-1 w-3 h-3 rounded-full border-4 border-blue-700 border-s-4 border-s-red-700 border-e-4 border-e-red-700  animate-spin"></span>
          </h1>
        </div>
      ) : (
        <div className="flex items-center justify-between p-3 border-b">
          <div className="flex items-center gap-3">
            <img
              src={data?.profileImage}
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h2 className="font-semibold text-xs">{data?.username}</h2>
              <p className="text-sm text-neutral-500">{data?.position}</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="flex items-center justify-end ">
              <Search className="w-4 h-4 text-neutral-500 " />
              <input
                type="search"
                placeholder="Search"
                value={search}
                onChange={handleSearchInput}
                className="bg-transparent bg-neutral-100 rounded-full border-none outline-none ml-2 text-xs w-auto focus:ring-neutral-300 focus:border-neutral-300"
              />
            </div>
            <button className="p-1 border border-neutral-400 hover:bg-neutral-100 rounded-full">
              <PhoneCall className="w-4 h-4 text-neutral-500" />
            </button>
            <button className="p-1 border border-neutral-400 hover:bg-neutral-100 rounded-full">
              <Video className="w-4 h-4 text-neutral-500" />
            </button>
            <button className="p-1 border border-neutral-400 hover:bg-neutral-100 rounded-full">
              <MoreVertical className="w-4 h-4 text-neutral-500" />
            </button>
          </div>
        </div>
      )}

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.fromUser === data?.id ? "justify-end" : "justify-start"
            }`}
          >
            {message.fromUser !== data?.id && (
              <img
                src={userPhoto}
                alt={userPhoto}
                className="rounded-full w-8 h-8 object-contain object-top"
              />
            )}
            <div
              className={`max-w-[70%] ${
                message.fromUser === data?.id
                  ? "bg-indigo-600 text-white  rounded-2xl p-3"
                  : " bg-white rounded-2xl p-3 border"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-xs">
                  {message.fromUser === data?.id ? data?.username : "Other"}
                </span>
                <span
                  className={`${
                    message.fromUser === data?.id
                      ? " text-white"
                      : "text-neutral-400"
                  } text-xs`}
                >
                  {new Date(message.timestamp).toLocaleTimeString("en-GB")}
                </span>
              </div>
              <p className="text-sm">{message.message}</p>
              {/* {message.attachments?.images && (
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {message.attachments.images.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt="Attachment"
                      width={200}
                      height={150}
                      className="rounded-lg"
                    />
                  ))}
                </div>
              )}
              {message.attachments?.link && (
                <a
                  href={message.attachments.link}
                  className="text-blue-500 text-sm block mt-2"
                >
                  {message.attachments.link}
                </a>
              )} */}
            </div>

            {message.fromUser === data?.id && (
              <img
                src={data?.profileImage}
                alt={data?.id}
                className="rounded-full w-8 h-8 object-contain object-top"
              />
            )}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <form onSubmit={handleSendMessage} className="border-t p-4">
        <div className="flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message here..."
            className="flex-1 bg-transparent border-none outline-none text-xs focus:ring-neutral-100 focus:border-neutral-100"
          />
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="p-1 hover:bg-neutral-200 rounded-full"
            >
              <AtSign className="w-4 h-4 text-neutral-500" />
            </button>
            <button
              type="button"
              className="p-1 hover:bg-neutral-200 rounded-full"
            >
              <Bold className="w-4 h-4 text-neutral-500" />
            </button>
            <button
              type="button"
              className="p-1 hover:bg-neutral-200 rounded-full"
            >
              <Smile className="w-4 h-4 text-neutral-500" />
            </button>
            <button
              type="button"
              className="p-1 hover:bg-neutral-200 rounded-full"
            >
              <Share2Icon className="w-4 h-4 text-neutral-500" />
            </button>
            <button
              type="button"
              className="p-1 hover:bg-neutral-200 rounded-full"
            >
              <ImageIcon className="w-4 h-4 text-neutral-500" />
            </button>
            <button
              type="button"
              className="p-1 hover:bg-neutral-200 rounded-full"
            >
              <Paperclip className="w-4 h-4 text-neutral-500" />
            </button>
            <button
              type="submit"
              className="p-1 bg-rose-500 hover:bg-rose-600 rounded-full"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
