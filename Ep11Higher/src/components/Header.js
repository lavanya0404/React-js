import { LOGO_URL } from "../utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("LogIn")
  return (
    <div className="flex justify-between bg-pink-100 shadow mb-2 px-2">
      <div className="flex justify-between align-middle">
      <div className="mt-4 ">
        <img src={LOGO_URL} alt="logo" className="w-20 rounded-2xl"></img>
        </div>
      </div>

      <div className="flex items-center p-4">
        <ul>
          <button className="p-2 w-[100px] hover:bg-pink-200 rounded-lg hover:shadow">
            <Link to="/grocery">Grocery</Link>
          </button>

          <button className="p-2 w-[100px] hover:bg-pink-200 rounded-lg hover:shadow">
            <Link to="/">Home</Link>
          </button>

          <button className="p-2 w-[100px] hover:bg-pink-200 rounded-lg hover:shadow">
            <Link to="/about">About Us</Link>
          </button>
          <button className="p-2 w-[100px] hover:bg-pink-200 rounded-lg hover:shadow">
            <Link to="/contact">Contact Us</Link>
          </button>
          <button className="p-2 w-[100px] hover:bg-pink-200 rounded-lg hover:shadow">
            Cart
          </button>
          <button
            className="p-2 w-[100px] hover:bg-pink-200 rounded-lg hover:shadow"
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
