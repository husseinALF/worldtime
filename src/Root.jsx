import React from "react";
import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <nav className="flex justify-between p-8 bg-blue-400 items-center">
        <h1 className="text-4xl font-extrabold text-white">
          <Link to={"/"}>World Time</Link>{" "}
        </h1>

        <ul className="flex space-x-4">
          <li>
            <Link to={"/about"}>About</Link>{" "}
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>{" "}
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Root;
