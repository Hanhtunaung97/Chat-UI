import React from "react";
import useSWR from "swr";
import { fetchChatUsers } from "../../services/chatGroup";
import {
  LuImage,
  LuInfo,
  LuMapPin,
  LuMessageCircle,
  LuUserPlus,
  LuUsers,
  LuVideo,
} from "react-icons/lu";
import Avatar from "react-avatar";
import img1 from "../../assets/image/img1.jpg";
import img2 from "../../assets/image/img2.jpg";
import img3 from "../../assets/image/img3.jpg";
import Loading from "../Loading";

const ChatUserDetailSection = () => {
  const { data, error, isLoading } = useSWR(
    `http://18.143.79.95/api/chatSystem/user/3`,
    fetchChatUsers
  );
  //   console.log(data);
  const MarketingName = "Marketing";
  return isLoading ? (
    <></>
  ) : (
    <>
      <div className="w-full h-screen  rounded-lg bg-white">
        <div className=" w-full h-full flex flex-col">
          <div className=" ">
            <div className="relative">
              <img
                src={data?.profileImage}
                className=" object-cover object-center rounded-lg  h-60 w-full inline-block"
              />
              <div className="absolute   -bottom-10 flex flex-col justify-center gap-1 items-center bg-white p-2 w-2/3 left-0 right-0 mx-auto rounded-lg ">
                <h3 className="text-xs text-neural-500 font-semibold font-headings">
                  {data?.username}
                </h3>
                <p className="text-sm text-neutral-500">{data?.position}</p>
                <div className="flex gap-2 items-start">
                  <LuMapPin className="w-4 h-4 text-neutral-500" />
                  <span className="text-sm text-neural-500 font-semibold font-headings">
                    {data?.address}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <button className="rounded-full border border-neutral-500 text-center p-1">
                    <LuUserPlus className="w-4 h-4 text-neutral-500 " />
                  </button>
                  <button className="rounded-full bg-indigo-500 border border-indigo-500 text-center p-1">
                    <LuMessageCircle className="w-4 h-4 text-white " />
                  </button>
                  <button className="rounded-full bg-rose-500 border border-rose-500 text-center p-1">
                    <LuVideo className="w-4 h-4 text-white " />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" border-t border-t-neutral-200 mt-16">
            <div className="flex flex-col gap-3 p-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm text-neutral-700  font-headings">
                  User Information
                </h4>
                <LuInfo className="w-5 h-5 text-neutral-400" />
              </div>
              <div className="flex flex-col items-start gap-1">
                <h5 className="text-xs font-headings text-neutral-500">
                  Phone
                </h5>
                <span className="text-sm text-neutral-700 font-semibold">
                  {data?.phone}
                </span>
              </div>
              <div className="flex flex-col items-start gap-1">
                <h5 className="text-xs font-headings text-neutral-500">
                  Email
                </h5>
                <span className="text-sm text-neutral-700 font-semibold">
                  {data?.email}
                </span>
              </div>
            </div>
          </div>
          <div className=" border-t border-t-neutral-200 ">
            <div className="flex flex-col gap-3 p-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm text-neutral-700  font-headings">
                  Group Participants
                </h4>
                <LuUsers className="w-5 h-5 text-neutral-400" />
              </div>
              <div className="flex items-center  justify-between">
                <Avatar
                  name={MarketingName}
                  round={false}
                  className="rounded"
                  size="20"
                  textSizeRatio={1}
                />
                <p className=" text-neutral-700 font-semibold  text-sm w-full ml-3">
                  {MarketingName}
                </p>
                <div className="relative ">
                  <img
                    src={data?.profileImage}
                    className=" object-cover object-center rounded-full  w-8  h-8 border border-neutral-200  inline-block  "
                  />
                  <span className="w-4 h-4 bg-neutral-200 text-[8px]  flex justify-center items-center rounded-full absolute top-0 bottom-0 -right-2 font-semibold  my-auto ">
                    +<span>2</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" border-t border-t-neutral-200 ">
            <div className="flex flex-col gap-3 p-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm text-neutral-700  font-headings">
                  Media
                </h4>
                <LuImage className="w-5 h-5 text-neutral-400" />
              </div>
              <div className="flex items-center  justify-between">
                <img
                  src={img1}
                  alt="img1"
                  className=" h-16 object-contain object-center rounded-lg"
                />
                <img
                  src={img2}
                  alt="img2"
                  className=" h-16 object-contain object-center rounded-lg"
                />
                <img
                  src={img3}
                  alt="img3"
                  className=" h-16 object-contain object-center rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatUserDetailSection;
