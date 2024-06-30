import LOGO_URL from "../utils/constants"
import { useState } from "react"
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("LogIn")
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
        <button 
            onClick={() => {
              window.location.href = "./about"
            }}
          >
          <li>Home</li>
          </button>
          <button 
            onClick={() => {
              window.location.href = "./about"
            }}
          >
            <li>About Us</li>
          </button>
          <button
            onClick={() => {
              window.location.href = "./contact"
            }}
          >
            <li>Contact Us</li>
          </button>
          <button>
          <li>Cart</li>
          </button>
          <button
            className="login"
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
