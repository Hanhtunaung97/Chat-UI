import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={` ${className} w-[90%] lg-w-[80%] mx-auto px-3 lg:px-0 `}>
      {children}
    </div>
  );
};

export default Container;
