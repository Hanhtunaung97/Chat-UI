import React from "react";
import {
  HiOutlineHome,
  HiOutlineBuildingOffice2,
  HiOutlineArrowPath,
  HiOutlineEnvelope,
  HiOutlineDocumentText,
  HiOutlineCalendarDateRange,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineCog8Tooth,
  HiOutlineUser,
} from "react-icons/hi2";
import userPhoto from "../assets/image/userPhoto.png";
const SideBar = () => {
  return (
    <aside
      id="docs-sidebar"
      className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed  h-auto top-2 bottom-0 start-1 z-[60] w-18  text-white    overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100  dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700"
    >
      <nav
        className="hs-accordion-group   w-full flex flex-col justify-center gap-10 items-center flex-wrap "
        data-hs-accordion-always-open
      >
        <ul className="flex flex-col justify-center items-center gap-4 w-full rounded-e-3xl bg-indigo-600 py-5">
          <li>
            <a
              className="flex items-center text-white justify-center text-sm p-2 mx-2  rounded-lg hover:bg-indigo-500 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href=""
            >
              <HiOutlineHome className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              className="flex items-center text-white justify-center text-sm  p-2 mx-2 rounded-lg hover:bg-indigo-500 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href=""
            >
              <HiOutlineBuildingOffice2 className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              className="flex items-center text-white justify-center text-sm  p-2 mx-2 rounded-lg hover:bg-indigo-500 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href=""
            >
              <HiOutlineArrowPath className="w-5 h-5" />
            </a>
          </li>
          <li className="flex justify-between items-center">
            <p className="w-1 h-6 bg-rose-500" />
            <a
              className="flex items-center text-white justify-center text-sm  p-2 mx-2 rounded-lg hover:bg-indigo-500 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href=""
            >
              <HiOutlineEnvelope className="w-5 h-5" />
            </a>
          </li>

          <li>
            <a
              className="flex items-center text-white justify-center text-sm  p-2 mx-2 rounded-lg hover:bg-indigo-500 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href=""
            >
              <HiOutlineDocumentText className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              className="flex items-center text-white justify-center text-sm  p-2 mx-2 rounded-lg hover:bg-indigo-500 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href=""
            >
              <HiOutlineCalendarDateRange className="w-5 h-5" />
            </a>
          </li>
          <li className=" relative">
            <span className=" absolute top-0 right-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-orange-400 text-white text-[8px]">
              2
            </span>
            <a
              className="flex items-center text-white justify-center text-sm  p-2 mx-2 rounded-lg hover:bg-indigo-500 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href=""
            >
              <HiOutlineChatBubbleOvalLeft className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              className="flex items-center text-white justify-center text-sm  p-2 mx-2 rounded-lg hover:bg-indigo-500 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href=""
            >
              <HiOutlineCog8Tooth className="w-5 h-5" />
            </a>
          </li>

          <li>
            <a
              className="flex items-center text-white justify-center text-sm  p-2 mx-2 rounded-lg hover:bg-indigo-500 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href=""
            >
              <HiOutlineUser className="w-5 h-5" />
            </a>
          </li>
        </ul>
        <div className="">
          <div className="w-full flex justify-center items-center flex-col gap-1  ">
            <div className="relative">
              <img
                src={userPhoto}
                className=" object-contain object-top rounded-full h-10  inline-block border border-orange-500"
              />
              <span className="w-2 h-2 bg-green-500 rounded-full absolute -bottom-0.5 right-0 left-0 mx-auto" />
            </div>
            <span className="text-black text-xs">Natalie</span>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
