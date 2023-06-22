import * as React from "react"
import "./Hero.css"
import HeroImage from "../../visuals/student_store_icon.18e5d61a.svg";

export default function Navbar() {
    return (
      <div className="hero">
        <div className="hero-content">
            <div className="hore-intro">
                <h1>Welcome!</h1>
                <h1>Find your Merch!</h1>
                <p>We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
            </div>
            <div className="media">
                <img className="hero-img"src={HeroImage} alt="hero image" /> 
            </div>
        </div>
      </div>
    )
  }