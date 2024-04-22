import React from "react";
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    
    <div className="flex justify-between border-b-2 bg-blue-200 ">
        <div className="pl-10"> 
        <img className="w-24 " src= {logo} alt="Logo" />
        </div>
        
       <div >
        <ul className="flex space-x-10 pt-5">
            <li className="">Home</li>
            <li>About Us</li>
            <li>About</li>
            <li>Cart</li>
        </ul>
       </div>

        
        <div className="pr-10 pt-5 ">User Icon</div>
    </div>

  );
};