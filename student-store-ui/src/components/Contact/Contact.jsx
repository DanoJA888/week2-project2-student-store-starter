import * as React from "react"
import "./Contact.css"
import Logo from "../Logo/Logo"

export default function Contact(){
    return(
    <div className="contact">
        <div>
            <h1>Contact Us</h1>
        </div>
        <div>
            <p>
                Email: code@path.org
            </p>
            <p>
                Phone: 1-800-CODEPATH
            </p>
            <p>
                Address: 123 Fake Street, San Francisco, CA
            </p>
        </div>
        
    </div>
    )
}