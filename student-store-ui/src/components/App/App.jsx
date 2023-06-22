import React , { useEffect, useState } from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import "./App.css"

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() =>{
    const apiCall = async () =>{
      try{
        const response = await fetch(`https://codepath-store-api.herokuapp.com/store`);
        const data = await response.json();
        console.log(data.products);
        setProducts(data.products);
      }
      catch{
        console.log("fetching went wrong")
      }
    };
    apiCall();
  }, []);
  console.log(products)
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Home products={products}/>
          <About />
          <Contact />
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  )
}
