/* This file generates the website's Header, which includes links to create a new flashcard 
and navigate to the MyFlashCard page to view all flashcards created  */
import React from "react";
import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-5 mt-1">
      <h1 className="text-4xl font-bold mb-6 text-white">
        Create Flashcard
      </h1>
      <div className="flex items-center space-x-10 mb-3">
        <button className="text-lg font-semibold text-black-600">
          <Link
            to={"/"} 
            /*if the link is actve it will give bottom background to creat new of red color */
            style={({ isActive }) => ({
              borderBottom: isActive ? "4px solid black" : undefined,
              paddingBottom: "12px",
              borderRadius: "3px",
            })}
          >
            Create New
          </Link>
        </button>
        <button className="text-lg font-semibold text-black-600">
          <Link
            to={"/myflashcard"}
            /*if the link is actve it will give bottom background to my Flashcard of black color */
            style={({ isActive }) => ({
              borderBottom: isActive ? "5px solid black" : undefined,
              paddingBottom: "12px",
              borderRadius: "3px",
            })}
          >
            My Flashcard
          </Link>
        </button>
      </div>
      <hr className="border bg-black-700 border-gray-300 mb-8" />
    </div>
  );
};

export default Navbar;
