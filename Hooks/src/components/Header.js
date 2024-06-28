import LOGO_URL from "../utils/constants";
import {useState} from "react";
const Header = () => {
  const[btnNameReact,setBtnNameReact
  ]=useState("LogIn");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
            btnNameReact =="LogIn" ? setBtnNameReact("LogOut") : setBtnNameReact("LogIn")
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  )
}
export default Header
