import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0 bg-blue-900 z-50">
      <div className="flex justify-between items-center p-4">
        <NavLink to="/" className="text-2xl font-bold text-white">
          Website
        </NavLink>
        <ul className="flex text-white">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "mr-8 p-2 bg-blue-500 border-black border-2"
                  : "mr-8 p-2 hover:bg-blue-500 hover:border-black hover:border-2"
              }
            >
              Draft
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/RTS"
              className={({ isActive }) =>
                isActive
                  ? "mr-8 p-2 bg-blue-500 border-black border-2"
                  : "mr-8 p-2 hover:bg-blue-500 hover:border-black hover:border-2"
              }
            >
              Raised to Store
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/store"
              className={({ isActive }) =>
                isActive
                  ? "mr-8 p-2 bg-blue-500 border-black border-2"
                  : "mr-8 p-2 hover:bg-blue-500 hover:border-black hover-border-2"
              }
            >
              Store
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
