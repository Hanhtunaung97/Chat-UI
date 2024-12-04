import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={` ${className} container mx-auto px-5 lg:px-0 `}>
      {children}
    </div>
  );
};

export default Container;
