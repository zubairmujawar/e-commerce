import React from "react";
import { useParams } from "react-router-dom";

const ProductInfoPage = () => {
  console.log()
  return (
    <div className="w-fill h-full flex justify-evenly items-center mx-auto max-w-[1440px]">
      <div className="w-[30%] m-2 h-[70vh] flex justify-center items-center border border-black">
        <img
          src="https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg"
          alt="img"
          className="w-[350px]"
        />
      </div>
      <div className="w-[50%] flex flex-col gap-3">
        <h1 className="text-lg">Red Tape Casual Watch for Men </h1>
        <h3 className="text-md">$ 1191</h3>
        <p className=" text-gray-500 text-sm">
          MRP <span className="line-through">$ 2000</span>
        </p>
        <div className="flex flex-col gap-3">
          <button className="bg-[#737a7d] p-1 w-[10rem] text-center rounded-3xl ">
            Add to Cart
          </button>
          <button className="bg-[#50606c] p-1 w-[10rem] text-center rounded-3xl ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoPage;
