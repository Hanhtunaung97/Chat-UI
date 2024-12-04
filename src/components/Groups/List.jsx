import React from "react";
import Avatar from "react-avatar";
import userPhoto from "../../assets/image/profile.jpg";
const List = ({ list }) => {
  //   console.log(name);
  return (
    <div className="flex flex-col gap-3  cursor-pointer">
      <div className="flex items-center  justify-between">
        <Avatar
          name={list.name}
          round={false}
          className="rounded"
          size="20"
          textSizeRatio={1}
        />
        <p className=" text-neutral-900 text-xs w-full ml-2">{list.name}</p>
        <div className="relative">
          <img
            src={userPhoto}
            className=" object-cover object-top  h-8  inline-block  rounded-full"
          />
          <span className="w-4 h-4 bg-neutral-200 text-[8px]  flex justify-center items-center rounded-full absolute top-0 bottom-0 -right-2  my-auto ">
            +<span>2</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default List;
