import { useState } from "react";
import { debounce } from "lodash";
import useSWR from "swr";
import { LuSearch } from "react-icons/lu";
import { fetchChatUsers } from "../../services/chatGroup";
const ChatSearchBar = () => {
  const [search, setSearch] = useState("");
  // console.log(search);
  // const { data, error, isLoading } = useSWR(
  //   search
  //     ? `http://18.143.79.95/api/chatSystem/users/list?username_like=${search}`
  //     : "http://18.143.79.95/api/chatSystem/users/list",
  //   fetchChatUsers
  // );
  // console.log(data);
  const handleSearchInput = debounce((e) => {
    setSearch(e.target.value);
  }, 500);

  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <LuSearch className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
      </div>
      <input
        type="search"
        onChange={handleSearchInput}
        className="bg-neutral-100  border-none text-neutral-900 text-sm rounded focus:ring-neutral-200 focus:border-neutral-200 block w-full ps-10 p-2.5  dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
        placeholder="Search Contact"
      />
    </div>
  );
};

export default ChatSearchBar;
