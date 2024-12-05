import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import ChatUserList from "./ChatUserList";
const ChatSearchBar = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [search, setSearch] = useState("");
  console.log(filteredData);
  const handleSearchInput = (e) => {
    const contact = e.target.value;
    setSearch(contact);
    if (contact) {
      searchContact(contact);
    } else {
      filteredData;
    }
  };
  const searchContact = (contact) => {
    if (!contact.trim()) {
      setFilteredData(contact);
      return;
    }
    const filtered = filteredData.filter((el) =>
      el.username.toLowerCase().includes(contact.toLowerCase())
    );
    console.log(filtered);
    setFilteredData(filtered);
    <ChatUserList user={filteredData} />;
  };
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <LuSearch className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
      </div>
      <input
        type="search"
        value={search}
        onChange={handleSearchInput}
        className="bg-neutral-100  border-none text-neutral-900 text-xs rounded focus:ring-neutral-200 focus:border-neutral-200 block w-full ps-10 p-2.5  dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
        placeholder="Search Contact"
      />
    </div>
  );
};

export default ChatSearchBar;
