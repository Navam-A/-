import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsTemplate from "./NewsTemplate";
import { useNavigate } from "react-router-dom";

export default function NewsPage() {
  let navigate = useNavigate();
  let [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/news")
      .then((res) => setNewsData(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="">
      {newsData.map((val) => {
        return(
        <div
          key={val._id}
          className="cursor-pointer"
          onClick={() =>
            navigate(`/viewPage/${val._id}`, { state: { endpoint: "news" } })
          }
        >
          <NewsTemplate
            img={val.image}
            author={val.author}
            title={val.title}
            cont={val.content}
            date={val.date}
          />
        </div>);
      })}
    </div>
  );
}
