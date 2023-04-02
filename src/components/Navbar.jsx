/*in this file we are making the Navbar of our website ,the nav bar contains the image of Almabetter logo which 
we are using in our website because we are able to make this website with the help of Almabetter */
import React from "react";
import logo from '../assets/BrandLogo.png';

const Navbar = () => {
    return(
        <div className="px-10 py-2 shadow-2xl bg-cyan-600 border-stone-900 border-b-2"> 
            <div className="w-36">
                <img src={logo} alt="logo"/>
            </div>
        </div>
    )
}

export default Navbar;