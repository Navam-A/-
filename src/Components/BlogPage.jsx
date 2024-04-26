import React, { useEffect, useState } from "react";
import BlogTemplate from "./BlogTemplate";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BlogPage() {
  let [blogData, setBlogData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://library-website-backend.onrender.com/blogs")
      .then((res) => setBlogData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full mx-auto grid grid-cols-4 my-5">
      {blogData.map((bl) => {
        return (
          <div
            key={bl._id}
            className="cursor-pointer"
            onClick={() => navigate(`/viewPage/${bl._id}`, {state: {endpoint: "blogs"}})}
          >
            <BlogTemplate title={bl.title} img={bl.image} />
          </div>
        );
      })}
    </div>
  );
}
