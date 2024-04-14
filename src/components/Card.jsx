import React from "react";
const Card = ({data}) => {
  return (
    <div className="max-w-[15rem] m-1 p-2  border flex flex-col items-center rounded-md shadow bg-gray-800 border-gray-700">
      <a href="#">
        <img
          className="w-[250px] h-[250px]"
          src={data.images[0]}
          alt="img"
        />
      </a>
      <div className="p-2">
        <h5 className=" text-md  font-bold text-white">
          {data.title} <span>$ {data.price}</span>
        </h5>

        <p className="mb-3 text-sm text-gray-400">
        {data.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
