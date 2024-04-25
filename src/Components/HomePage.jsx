import React from "react";
import heroImg from "../assets/HeroImg.jpg";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  let navigate = useNavigate()
  return (
    <div className="grid grid-cols-2 gap-4 ">
      <div className="text-5xl font-mono pt-28 ps-16 text-tight leading-9">
        <h1>Know Your Next Read</h1>
        <br />
        <h1>Quick Book</h1>
        <br />
        <h1 className="font-sans font-medium text-teal-600">Explore !</h1>
        <button className="font-sans text-[50%] text-white p-2 hover:bg-teal-700 rounded-tl-lg rounded-br-lg mt-10 bg-teal-600 " onClick={()=> navigate("/books")}>Buy Now</button>
      </div>
      <div>
        <img className="mix-blend-darken w-full h-auto" src={heroImg} alt="heroImg" />
      </div>
    </div>
  );
}
