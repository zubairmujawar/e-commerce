import React, { useState } from "react";

const Cart = () => {
    const [count, setCount] = useState(0)
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
          <div className="w-[6rem] flex justify-between items-center border border-black gap-[3px]">
            <button className="px-3 rounded-sm text-center text-xl border border-black" onClick={()=>setCount(count-1)}>-</button>
            <p >{count}</p>
            <button className="px-3 rounded-sm text-center text-xl border border-black" onClick={()=>setCount(count+1)}>+</button>
          </div>
          <p>Total Price <span>1999</span></p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
