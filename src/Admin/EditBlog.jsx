import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogTemplate from "../Components/BlogTemplate";
import Modal from "./Modal";

export default function EditBlog() {
  let [blogData, setBlogData] = useState([]);
  let [isOpen, setIsOpen] = useState(false);
  let [id, setId] = useState("");

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    axios
      .get("https://library-website-backend.onrender.com/blogs")
      .then((res) => setBlogData(res.data))
      .catch((err) => console.log(err));
  }, [blogData]);

  return (
    <div className="w-full mx-auto grid grid-cols-2 lg:grid-cols-3 my-5 p-3">
      {blogData.map((bl) => {
        return (
          <div className="relative group w-[330px]" key={bl.id}>
            <div className="group-hover:opacity-50">
              <BlogTemplate title={bl.title} img={bl.image} />
            </div>
            <span className="absolute inset-0 hidden group-hover:flex group-hover:items-center group-hover:justify-center">
              <button
                onClick={() => {
                  setIsOpen(true);
                  setId(bl.id);
                }}
                className="w-9 h-9 text-xl mx-5 bg-red-400 opacity-100 font-bold p-1 rounded-lg **!important**"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  axios
                    .delete(`http://localhost:3000/blogs/${bl.id}`)
                    .then(() => alert("Blog Deleted Successfully !"))
                    .catch((err) => console.log(err));
                }}
                className="w-9 h-9 bg-red-600 font-bold p-1 rounded-lg **!important**"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </span>
          </div>
        );
      })}
      {isOpen && <Modal
        isOpen={isOpen}
        toggleButton={toggleButton}
        modalTitle={"Edit Blog !"}
        id={id}
        endpoint={"blogs"}
      />}
    </div>
  );
}
