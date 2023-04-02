/*This file contains code that generates the MyFlashCard page. When a user visits this page,
 they will be able to view all the flashcards they have created in a visually appealing format 
 & using the map function user is able to render  flashcard UI components */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlashcardUI from "../components/Card_UI/FlashCardUI";

const MyFlashCard = () => {
  const navigate = useNavigate(); //To redirect the user to a different location, the imperative method can be used

  const flashcard = useSelector((state) => state.flashcard.flashcards); // getting state from store

  const [showAll, setShowAll] = useState(false);

  const showLimit = !showAll ? 6 : flashcard.length; // setting showlimit of cards on the page

  return (
    <section className="flex flex-col mt-16">
      {/*The code displays all available flashcards if there are any present, and if the
       number of flashcards is zero, it prompts the user to create a new flashcard.*/}
      {flashcard.length > 0 ? (
        <div>
          <div className="flex flex-wrap">
            {flashcard.slice(0, showLimit).map(({ card }, i) => (
              <FlashcardUI key={i} flashcard={card} />
            ))}
          </div>
          <div className="flex justify-end mr-10">
            <button
              className="w-32 mb-10 rounded-md  font-semibold text-lg text-white bg-blue-500 
              outline-black outline-2 outline active:scale-100 transition-all duration-100 hover:scale-105"
              onClick={() => setShowAll(!showAll)}
            >
              See all
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center bg-gray-100 shadow-lg p-20 rounded-md">
          <h1 className="font-semibold text-xl text-rose-500">
              There are no flashcards available to display at the moment., Go to
            <span
              className="text-blue-500 text-lg cursor-pointer"
              onClick={() => navigate("/")}
            >
              ..*CREATE FLASHCARD... 
            </span>
            to Create a New Flashcard
          </h1>
        </div>
      )}
    </section>
  );
};

export default MyFlashCard;
