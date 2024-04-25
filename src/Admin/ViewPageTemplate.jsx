import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function ViewPageTemplate() {
  let { id } = useParams();
  let location = useLocation();
  let { endpoint } = location.state;
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  let [author, setAuthor] = useState("");
  let [image, setImage] = useState("");
  let [price, setPrice] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/${endpoint}/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
        setImage(res.data.image);
        setAuthor(res.data.author);
        setPrice(res.data.price);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="grid grid-rows-1 grid-cols-3">
      <div className="lg:p-5 p-3 col-span-12 lg:col-span-2">
        <h1 className="font-bold lg:p-4 pb-2 text-2xl">{title}</h1>
        <h5 className="font-semibold lg:ps-5">{author}</h5>
        <p className="font-mono lg:p-5 text">{content}</p>
        {endpoint === "books" && (
          <h5 className="font-semibold ps-4">₹ {price}</h5>
        )}
      </div>
      <div className="lg:p-5 p-3 col-span-12 lg:col-span-1">
        <img src={image} alt="" className="lg:mx-auto rounded-lg" />
      </div>
    </div>
  );
}
