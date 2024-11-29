import React from "react";
import logo from "../assets/logo.jpg";
import { Routes, Route, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="main">
      <div className="w-full h-24 bg-gradient-to-r from-#93c5fd to-#f472b6 flex justify-between px-4 items-center">
        <div className="left">
          <img className="h-24 rounded-full w-auto px-4 py-3 transform hover:scale-110 transition-transform duration-300" src={logo} />
        </div>
        <div className="right px-20">
          <ul className="flex gap-8 font-lacquer text-lg">
            <li className="transform hover:scale-110 transition-transform duration-300">
              <Link to="/mission">Mission</Link>
            </li>
            <li className="transform hover:scale-110 transition-transform duration-300">
              <Link to="/testimony">Testimony</Link>
            </li>
            <li className="transform hover:scale-110 transition-transform duration-300">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="transform hover:scale-110 transition-transform duration-300">
              <Link to="/team">Our Team</Link>
            </li>
            <li className="transform hover:scale-110 transition-transform duration-300">
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
