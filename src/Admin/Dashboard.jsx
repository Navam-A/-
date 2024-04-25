import React, { useState } from "react";
import UploadBook from "./UploadBook";
import CreateBlog from "./CreateBlog";
import WriteNews from './WriteNews'
import EditBlog from "./EditBlog";
import EditNews from "./EditNews";
import EditBook from "./EditBook";

export default function Dashboard() {
  let [view, setView] = useState("");
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 h-full md:col-span-2 sticky top-0 flex flex-col border-r-2 border-gray-500">
        <h1 className="text-center font-mono text-2xl mb-5">DASHBOARD</h1>
        <h3 className="mx-auto my-3">----------------Upload---------------</h3>
        <button
          onClick={() => setView(<CreateBlog />)}
          className="bg-teal-300 w-[150px] font-semibold mx-auto p-3 rounded-lg my-2"
        >
          Write a Blog
        </button>
        <button
          onClick={() => setView(<WriteNews />)}
          className="bg-teal-300 w-[150px] font-semibold mx-auto p-3 rounded-lg my-2"
        >
          Write a News
        </button>
        <button
          onClick={() => setView(<UploadBook />)}
          className="bg-teal-300 w-[150px] font-semibold mx-auto p-3 rounded-lg my-2"
        >
          Upload a Book
        </button>
        <h3 className="mx-auto my-3">----------------Edit's---------------</h3>
        <button
          onClick={() => setView(<EditBlog />)}
          className="bg-teal-300 w-[150px] font-semibold mx-auto p-3 rounded-lg my-2"
        >
          Edit a Blog
        </button>
        <button
          onClick={() => setView(<EditNews />)}
          className="bg-teal-300 w-[150px] font-semibold mx-auto p-3 rounded-lg my-2"
        >
          Edit a News
        </button>
        <button
          onClick={() => setView(<EditBook />)}
          className="bg-teal-300 w-[150px] font-semibold mx-auto p-3 rounded-lg my-2"
        >
          Edit a Book
        </button>
      </div>
      <div className="col-span-12 md:col-span-10 ">
        {view}
      </div>
    </div>
  );
}
