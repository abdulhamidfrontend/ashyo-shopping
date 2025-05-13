import React from "react";
import Top from "@/components/Top";
import Navbar from "@/components/Navbar";
import Categories from "@/components/Categories";

const products = () => {
  return (
    <div className="w-full m-auto">
      <Top />
      <div className="max-w-[85%] m-auto">
        <Navbar />
        <div className="my-15">
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default products;
