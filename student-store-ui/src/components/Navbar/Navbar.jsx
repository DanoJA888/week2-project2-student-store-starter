import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <Logo />
        <span>Home</span>
        <span>About Us</span> 
        <span>Contact Us</span>
        <span>Buy Now</span>
      </div>
    </nav>
  )
}