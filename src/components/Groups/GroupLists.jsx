import React from "react";
import { fetchLists } from "../../services/listGroup";
import List from "./List";
import useSWR from "swr";
import { HiPlus } from "react-icons/hi2";

const GroupLists = () => {
  const { data, error, isLoading } = useSWR(
    "http://18.143.79.95/api/chatSystem/groups/list",
    fetchLists
  );
  return (
    <div className="bg-white flex flex-col gap-3 rounded-lg p-4 ">
      <div className="flex justify-between items-center">
        <h3 className=" text-neutral-900  font-semibold text-lg">
          Groups ({data?.length})
        </h3>
        <HiPlus />
      </div>
      {!isLoading && data.map((el) => <List key={el.id} list={el} />)}
    </div>
  );
};

export default GroupLists;
