/*We are consolidating the values of multiple flashcards into a single flashcard theme,
 which will be displayed in the MyFlashCard section */
 import React from "react";
 import { useNavigate } from "react-router-dom";
 import DemoImg from "../../assets/gray-blue.jpeg";
 
 const MySingleFlashCard = ({ flashcard }) => {
   const navigate = useNavigate();
 
   return (
     <div
       key={flashcard.groupid} //here we are retrieving the group ID
       className="p-4 m-6 mx-auto flex flex-col space-y-3 items-center justify-center bg-white rounded-md
        text-black w-[23rem] h-[13rem] relative border border-2 border-black"
     >
       <div className="absolute -top-9 outline outline-5 outline-black p-0.5 rounded-full">
         {/*We are utilizing a ternary operator in this code section to verify if the creator has provided a group image. 
         If an image is available, it will be set as the group image; otherwise, the default image will be used */}
         {flashcard.groupimg ? (
           <img
             className="rounded-full w-16 h-16 object-cover aspect-square "
             src={flashcard.groupimg} //here we are retrieving the group image
             alt={flashcard.groupname}//In this section, we are assigning the group name & alternate text to the image tag
           />
         ) : (
           <img
             className="rounded-full w-16 h-16 object-cover aspect-square"
             src={DemoImg}
             alt={flashcard.groupname} // In this section, we are assigning the group name & alternate text to the image tag
           />
         )}
       </div>
       <h2 className="font-bold text-lg">{flashcard.groupname}</h2>
       <p className="text-center font-medium text-sm text-slate-600 line-clamp-2">
         {flashcard.groupdescription}
       </p>
       <p className="font-medium text-sm text-slate-700">
         {/*If there are flashcards available, the code will output the number of flashcards present; otherwise, it will display zero*/}
         {flashcard.cards ? flashcard.cards.length : 0} Cards
       </p>
       <button
         onClick={() => navigate(`/flashcarddetails/${flashcard.groupid}`)}  
        //  onClick event that navigates to a specific flashcard group's details page when clicked.
         className="py-2 px-16 text-white font-bold rounded-sm bg-blue-400 outline-2 outline outline-black 
         active:scale-100 transition-all duration-100 hover:scale-105"
       >
         View Cards
       </button>
     </div>
   );
 };
 
 export default MySingleFlashCard;
 