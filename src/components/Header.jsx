import React from "react";
const Header = () => {
  return (
    <header className="pt-3 ">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold font-headings">Chat</h3>
        <a className="text-indigo-500 underline font-headings font-semibold">
          Add New Profile
        </a>
      </div>
    </header>
  );
};

export default Header;
