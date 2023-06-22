import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import { BsInstagram } from "react-icons/bs";
import { BsMeta } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Logo/>
        <div className="navbar-icons">
          <span><BsInstagram /></span>
          <span><BsMeta /></span>
        </div>

        <div className="navbar-links">
          <span>Home</span>
          <span>About Us</span> 
          <span>Contact Us</span>
          <span>Buy Now</span>
        </div>
        </div>
    </nav>
  )
}