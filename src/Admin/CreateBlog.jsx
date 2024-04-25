import axios from "axios";
import React, { useState } from "react";

export default function CreateBlog() {
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");
  let [content, setContent] = useState("");
  let [image, setImage] = useState("");

  let postData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/blogs", {
        title,
        author,
        content,
        image,
      })
      .then(() => {
        alert("Thank you for Posting!");
        setTitle("")
        setAuthor("")
        setContent("")
        setImage("")
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={postData} className="flex flex-col w-[90%] h-full p-10">
        <h1 className="font-mono text-2xl">Write your Thought's !</h1>
        <input
          className="w-3/4 my-3 h-full p-3 font-semibold border-2 text-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          className="w-3/4 my-3 h-full p-3 font-normal border-2 text-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
          type="text"
          name="author"
          value={author}
          placeholder="Author's Name"
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <textarea
          className="w-3/4 my-3 h-full p-3 font-semibold border-2 text-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
          type="text"
          name="content"
          value={content}
          placeholder="Content"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input
          className="w-3/4 my-3 h-full p-3 font-semibold border-2 text-xl focus:outline-none focus:ring-1 focus:ring-teal-500"
          type="url"
          name="image"
          value={image}
          placeholder="BLog Image Link"
          onChange={(e) => setImage(e.target.value)}
        ></input>
        <button
          type="submit"
          className="bg-teal-300 w-[150px] font-bold text-lg  p-3 rounded-lg my-2"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
