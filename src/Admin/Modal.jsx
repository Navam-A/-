import axios from "axios";
import React, { useEffect, useState } from "react";

function Modal({ isOpen, toggleButton, modalTitle, id, endpoint }) {
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");
  let [content, setContent] = useState("");
  let [image, setImage] = useState("");
  let [price, setPrice] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/${endpoint}/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setContent(res.data.content);
        setImage(res.data.image);
        setPrice(res.data.price);
      })
      .catch((err) => console.log(err));
  }, []);

  let edit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/${endpoint}/${id}`, {
        title,
        author,
        content,
        image,
        price
      })
      .then(() => alert("Data Updated Successfully !"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-500 p-8 rounded-lg">
            <h5 className="text-lg font-bold mb-4">{modalTitle}</h5>
            <form className="flex flex-col">
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
              <input
                type="text"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <input
                type="url"
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              {endpoint==="books" && <input
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />}
            </form>
            <button
              type="submit"
              onClick={edit}
              className="mt-4 bg-teal-300 me-3 text-white py-2 px-4 rounded cursor-pointer"
            >
              Update
            </button>
            <button
              onClick={toggleButton}
              className="mt-4 bg-gray-600 text-white py-2 px-4 rounded cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
