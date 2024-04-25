import React, { useEffect, useState } from "react";
import axios from "axios";
import BookTemplate from "./BookTemplate";
import { NavLink, useNavigate, useParams } from "react-router-dom";

export default function BooksPage() {
  let [data, setData] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/books")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className=" grid grid-cols-5 my-5 cursor-pointer">
      {data.map((val) => {
        return (
          <div
            key={val._id}
            className="cursor-pointer"
            onClick={() =>
              navigate(`/viewPage/${val._id}`, { state: { endpoint: "books" } })
            }
          >
            <BookTemplate
              key={val._id}
              path={val.image}
              title={val.title}
              author={val.author}
              price={val.price}
            />
          </div>
        );
      })}
    </div>
  );
}
