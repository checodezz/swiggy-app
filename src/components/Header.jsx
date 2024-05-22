import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header render");
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;