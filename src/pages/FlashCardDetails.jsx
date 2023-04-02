/*In this file, we are creating the Flashcard Details page which is displayed when the user clicks on 'View Card' 
on the MyFlashcard page. At the beginning of this page, we show the group name and group description. 
Before the group name, we have a back arrow button, and clicking on it takes us one step back using useNavigate.
Then, we show the card's name, description, and image. We also have share, download, and print buttons on this page. 
Clicking on the share button opens a pop-up showing the share link and a button for copying the link.
 When we click on the copy button, the link gets copied, and a notification is displayed, 
saying 'Link copied to clipboard. We also have social media share buttons on this pop-up,
and we can close it by clicking on the (x) button.*/   

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BiShare, BiShareAlt, BiCopy, BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import {AiOutlineDownload,AiFillPrinter,AiFillCloseCircle,} from "react-icons/ai";
import TabHands from "../assets/tab.jpeg";
import Facebook from "../assets/facebook-icon.svg";
import Linkedin from "../assets/linkedin-icon.svg";
import Whatsapp from "../assets/whatsapp-icon.svg";
import Twitter from "../assets/twitter-icon.svg";
import Mail from "../assets/mail-icon.svg";
import {FacebookShareButton,LinkedinShareButton,WhatsappShareButton,TwitterShareButton,EmailShareButton,} from "react-share";

const Flashcard = () => {
  const { groupId } = useParams();  // retrieve route parameters from the component rendered by the matching route
  const navigate = useNavigate();

  const cards = useSelector((state) => state.flashcard.flashcards); // accessing values from store

  const [ourCard, setOurCard] = useState({});
  const [singleCardDetail, setSingleCardDetail] = useState({});
/*filter the cards which have cardid = id and give card to singlecarddetails */
  const displayCard = (id) => {
    const showSingleCard = ourCard.cards.filter((c) => c.cardid === id);
    setSingleCardDetail(showSingleCard[0]);
  };
/*it will not return anything when no group is avaliable else it will filter cards and give card to ourcard */

  useEffect(() => {
    if (!groupId || !cards) return;
    const temp = cards.filter((c) => c.card.groupid === groupId);
    setOurCard(temp[0].card);
  }, [groupId, cards]);

  useEffect(() => {
    ourCard.cards && setSingleCardDetail(ourCard.cards[0]);
  }, [ourCard]);


  
  const [isCopied, setIsCopied] = useState(false);  //state for copying link
  const [url, setUrl] = useState();        
  const [share, setShare] = useState("none");   //state for share button

  // share handler for show dispay
  const shareHandlerOpen = () => {
    setShare("flex");
    setUrl(`${document.location.href}`);
  };
  const shareHandlerClose = () => {
    setShare("none");
  };
/* show alert or message when link gets coppied */
  useEffect(() => {
    isCopied &&
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
  }, [isCopied]);

  return (
/* flashcard details */

    <section className="flex flex-col text-black">
      <header className="flex">
        <BiArrowBack
          className="text-3xl mr-6 text-white cursor-pointer active:scale-100 transition-all duration-100 
          hover:scale-110 hover:bg-white hover:text-red-600 hover:rounded-3xl"
          onClick={() => navigate(-1)}
        />
        <div className="flex flex-col ">
          <h2 className="text-xl text-black font-bold">{ourCard.groupname}</h2>
          {ourCard.groupdescription && (
            <p className=" my-2 text-yellow-200">{ourCard.groupdescription}</p>
          )}
        </div>
      </header>
      <main className="mt-6 grid grid-rows-1 md:grid-cols-4">
        <aside className="col-span-1 bg-white w-[60vw] md:w-[14rem] xl:w-[17rem] m-5 px-4 py-5 h-fit mr-2 rounded-md 
        outline outline-1 outline-black active:scale-100 transition-all duration-100 hover:scale-105">
          <h2 className="p-2 font-bold">Flashcards</h2>
          <hr />
          <hr className="mb-2 mr-4 border border-1 border-slate-700" />
          {ourCard.cards &&
            ourCard.cards.map((card) => (
              <p
                key={card.cardid}
                className={`py-2 px-8 text-blue-500 font-medium hover:bg-black rounded-md cursor-pointer ${
                  card.cardid === singleCardDetail.cardid &&
                  "!text-yellow-400 !font-bold"
                }`}
                onClick={() => displayCard(card.cardid)}
              >
                {card.cardname}
              </p>
            ))}
        </aside>

        <section className="col-span-3 md:col-span-2 flex flex-col xl:flex-row items-center w-full bg-white shadow-lg
         rounded-lg outline outline-1 outline-black active:scale-100 transition-all duration-100 hover:scale-105">
          <img
            src={TabHands}
            alt="cardimage"
            className="object-contain w-[32rem] xl:w-[20vw] h-full p-6"
          />
          <p className={`w-full p-6 py-10 `}>
            {singleCardDetail.carddescription}
          </p>
        </section>
        <aside className="col-span-1 hidden md:flex flex-col items-center space-y-5 ">
          <button
            type="text"
           
            onClick={shareHandlerOpen}
            className="flex items-center py-3 px-4 xl:w-60 space-x-5 bg-white rounded-md shadow-lg outline outline-1 
            outline-black active:scale-100 transition-all duration-100 hover:scale-105"
          >
            <BiShare className="scale-x-[-1]" />
            <span>Share</span>
          </button>

          <button className="flex items-center py-3 px-4 xl:w-60 space-x-5 bg-white rounded-md shadow-lg outline 
          outline-1 outline-black active:scale-100 transition-all duration-100 hover:scale-105">
            <AiOutlineDownload />
            <span>Download</span>
          </button>
          <button className="flex items-center py-3 px-4 xl:w-60 space-x-5 bg-white rounded-md shadow-lg outline 
          outline-1 outline-black active:scale-100 transition-all duration-100 hover:scale-105">
            <AiFillPrinter />
            <span>Print</span>
          </button>
        </aside>
      </main>






{/* PopUp box for URL and Share option */}



      <div className="popupBox" style={{ display: share }}>
        <div className="relative w-11/12 xl:w-2/5 sm:w-11/12 p-3 sm:p-8 bg-slate-200 rounded-lg inline-table outline
         outline-3 outline-black">
          <h3 className="text-lg font-semibold mb-2 ">Share :</h3>
          <div className="flex sm:items-center flex-col sm:flex-row ">
            <span className="w-6/7 px-2 py-6 rounded-lg bg-white outline-dashed outline-1 outline-blue-600 inline-table">
              <span>Link :</span>&nbsp;&nbsp;
              <span className="inline-block">{url}</span>
              <h2 className="p-2 h-5 ml-3 text-sm text-red-500 font-semibold">
                {isCopied && "Link copied to clipboard"}
              </h2>
            </span>

            <span className="flex mt-3 sm:mt-0">
              <BiCopy
                className="text-2xl ml-4  mb-5 cursor-pointer"
                onClick={() => setIsCopied(true)}
              />
              <BiShareAlt className="text-2xl  ml-4 text-blue-600 mb-6 cursor-pointer" />
              <AiFillCloseCircle
                className="closebtn bg-white text-red-600 outline-2 outline outline-rose-500 rounded-3xl hover:scale-125"
                onClick={shareHandlerClose}
              />
            </span>
          </div>
          <div className="mt-6 flex items-center space-x-10 justify-center">
            <FacebookShareButton url="https://www.facebook.com/">
              <img
                src={Facebook}
                alt="Facebook"
                className="w-8 p-1 outline outline-2 otline-black rounded-3xl cursor-pointer"
              />
            </FacebookShareButton>
            <LinkedinShareButton url="https://www.linkedin.com/">
              <img
                src={Linkedin}
                alt="Linkedin"
                className="w-8 p-1 outline outline-2 otline-black rounded-3xl cursor-pointer"
              />
            </LinkedinShareButton>
            <WhatsappShareButton url="https://web.whatsapp.com/">
              <img
                src={Whatsapp}
                alt="Whatsapp"
                className="w-8 p-1 outline outline-2 otline-black rounded-3xl cursor-pointer"
              />
            </WhatsappShareButton>
            <TwitterShareButton url="https://twitter.com/">
              <img
                src={Twitter}
                alt="Twitter"
                className="w-8 p-1 outline outline-2 otline-black rounded-3xl cursor-pointer"
              />
            </TwitterShareButton>
            <EmailShareButton url="https://gmail.com/">
              <img
                src={Mail}
                alt="Mail"
                className="w-8 p-1 outline outline-2 otline-black rounded-3xl cursor-pointer"
              />
            </EmailShareButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flashcard;
