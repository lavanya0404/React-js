import LOGO_URL from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("LogIn")
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <button>
            <Link to="/">Home</Link>
          </button>
          <button>
           <Link to="/about">About Us</Link>
          </button>
          <button>
            <Link to="/contact">Contact Us</Link>
          </button>
          <button>
            Cart
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
