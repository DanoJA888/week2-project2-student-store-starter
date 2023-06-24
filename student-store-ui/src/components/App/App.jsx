import React , { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import "./App.css"
import ProductDetail from "../ProductDetail/ProductDetail"

export default function App() {
  const [shoppingCart, setShoppingCart] = useState({});
  console.log({shoppingCart})
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Sidebar cart={shoppingCart}/>
          <Navbar />
          <Routes>
            <Route path = "/" element={<Home currentCart = {shoppingCart} updateCart={setShoppingCart}/>}></Route>
            <Route path = "/product/:id" element={<ProductDetail />}></Route>
          </Routes>
          <About />
          <Contact />
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  )
}
