import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-2 sticky w-full bg-slate-600 flex justify-around items-center">
      <h2>E commerce</h2>
      <ul className="list-none flex justify-center gap-3 items-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? "text-white" : ""}`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) => `${isActive ? "text-white" : ""}`}
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
