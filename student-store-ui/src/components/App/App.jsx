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
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState({});
  const [currentSubTot, setSubTot] = useState(0.00);
  const [checkoutStatus, setChechkoutStatus] = useState(false);
  console.log({shoppingCart})

  useEffect(() =>{
    const apiCall = async () =>{
        const response = await fetch(`http://localhost:3001/store`);
        const data = await response.json();
        console.log(data.products);
        setProducts(data.products);
    };
    apiCall();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Sidebar products ={products} cart={shoppingCart} clearCart = {setShoppingCart} subTotal = {currentSubTot} checkoutStatus ={checkoutStatus} setChechkoutStatus={setChechkoutStatus}/>
          <Navbar />
          <Routes>
            <Route path = "/" element={<Home products = {products} currentCart = {shoppingCart} updateCart={setShoppingCart} currentSubTotal = {currentSubTot} updateSubTotal = {setSubTot} 
            checkoutStatus = {checkoutStatus}/> }></Route>

            <Route path = "/store/:productId" element={<ProductDetail />}></Route>
          </Routes>
          <About />
          <Contact />
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  )
}
