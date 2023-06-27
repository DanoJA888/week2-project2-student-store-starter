import * as React from "react"
import "./About.css"
import Logo from "../Logo/Logo"

export default function About(){
    return(
    
    <div className="about">
        <div className="about-content">
        
            <h1>About Us</h1>
            <div className="about-content-summary">
                <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>

                <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>

                <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>           
            </div>
        </div>
    </div>
    )
}
