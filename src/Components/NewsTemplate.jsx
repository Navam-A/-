import React from "react";

export default function NewsTemplate({ img, title, cont, date, author}) {
  return (
    <div className="hover:scale-105 hover:ms-10 w-[95%] m-6 rounded-lg overflow-hidden shadow-lg shadow-gray-500">
      <figure className="flex lg:flex-col xl:flex-row">
        <img src={img} alt="" className="rounded-xl w-[25%] lg:w-full my-auto xl:w-[25%] lg:m-0 lg:h-60 h-[250px] m-1"/>
        <figcaption>
          <h3 className="p-3 lg:p-2 text-lg font-bold">{title}</h3>
          <p className="ps-3 lg:p-2">{date}</p>
          <p className="p-3 lg:p-2">{cont}</p>
          <h1 className="p-2 font-semibold">{author}</h1>
        </figcaption>
      </figure>
    </div>
  );
}
