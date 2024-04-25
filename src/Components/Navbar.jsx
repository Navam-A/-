import React from "react";
import "react-router-dom";
import Logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <div className="p-6 flex justify-between navbar">
      <div className="w-2/12 navImg">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
      </div>
      <div className="pt-2 me-10">
        <NavLink to="/" className="px-4 text-lg font-semibold">
          Home
        </NavLink>
        <NavLink to="/books" className="px-4 text-lg font-semibold">
          Books
        </NavLink>
        <NavLink to="/blogs" className="px-4 text-lg font-semibold">
          Blogs
        </NavLink>
        <NavLink to="/news" className="px-4 text-lg font-semibold">
          News
        </NavLink>
        
      </div>
    </div>
  );
}
