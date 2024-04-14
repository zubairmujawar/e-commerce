import React from "react";

const ProductPage = () => {
  return (
    <div className="w-fill h-full ">
      <div className="w-[50%] h-full">
        <img
          src="https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg"
          alt="img"
        />
      </div>
      <div className="w-[50%] flex flex-col">
        <h1 className="text-lg">Red Tape Casual Watch for Men </h1>
        <h3 className="text-md">$ 1191</h3>
        <p className=" text-gray-500 text-sm">MRP <span className="line-through">$ 2000</span></p>
        <div className="flex flex-col gap-3">
          <button className="bg-[#ffd52f] p-1 w-[5rem] text-center rounded-3xl ">
            Add to Cart
          </button>
          <button className="bg-[#d27a0d] p-1 w-[5rem] text-center rounded-3xl ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
