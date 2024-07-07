import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("LogIn")
  return (
    <div className="flex justify-between bg-pink-100 shadow mb-2 px-2">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="w-20 "></img>
      </div>
      
      <div className="flex items-center p-4">
        <ul>
        
        <button className="px-4" >
            <Link to="/grocery">Grocery</Link>
          </button>
        
          
          <button className="px-4">
            <Link to="/">Home</Link>
          </button>
     
          <button className="px-4">
           <Link to="/about">About Us</Link>
          </button>
          <button className="px-4">
            <Link to="/contact">Contact Us</Link>
          </button>
          <button className="px-4">
            Cart
          </button>
          <button
           className="px-4"
            onClick={() => {
              btnNameReact == "LogIn"
                ? setBtnNameReact("LogOut")
                : setBtnNameReact("LogIn")
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  )
}
export default Header
