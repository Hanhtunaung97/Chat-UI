import React, { useEffect, useState } from "react";
import ChatUserList from "./ChatUserList";
import ChatButtonGroup from "./ChatButtonGroup";
import Loading from "../Loading";
import { LuSearch } from "react-icons/lu";
import { debounce } from "lodash";
const ChatUserListGroup = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchContact = async () => {
    const res = await fetch("http://18.143.79.95/api/chatSystem/users/list");
    const fetchedData = await res.json();
    setFilteredData(fetchedData);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchContact();
  }, []);
  const handleSearchInput = debounce(
    (e) => {
      const contact = e.target.value;
      if (contact) {
        searchContact(contact);
      } else {
        fetchContact();
      }
    },
    [500]
  );
  const searchContact = (contact) => {
    if (!contact.trim()) {
      setFilteredData(contact);
      return;
    }
    const filtered = filteredData.filter((el) =>
      el.username.toLowerCase().includes(contact.toLowerCase())
    );
    setFilteredData(filtered);
  };
  return (
    <div className="bg-white flex flex-col gap-4 rounded-lg p-4 w-full ">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <LuSearch className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
            </div>
            <input
              type="search"
              // value={search}
              onChange={handleSearchInput}
              className="bg-neutral-100  border-none text-neutral-900 text-xs rounded focus:ring-neutral-200 focus:border-neutral-200 block w-full ps-10 p-2.5  dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
              placeholder="Search Contact"
            />
          </div>
          {filteredData?.map((el) => (
            <ChatUserList key={el.id} user={el} />
          ))}
          <ChatButtonGroup />
        </>
      )}
    </div>
  );
};

export default ChatUserListGroup;
