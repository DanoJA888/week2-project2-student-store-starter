import React , { useEffect, useState } from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import Search from "../Search/Search"
import ProductDetail from "../ProductDetail/ProductDetail"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home({products, currentCart, updateCart, currentSubTotal, updateSubTotal}) {
  
  const [currCategory, setCategory] = useState("All Categories");
  const [currSearchTerm, setSearchTerm] = useState("");
  

  
  
    return (
    <div className="home">
        <Hero />
        <Search filtering = {setCategory} currentSearch={currSearchTerm} setSearch={setSearchTerm}/>
        <ProductGrid products={products} category = {currCategory} search = {currSearchTerm} currentCart = {currentCart} updateCart = {updateCart} currentSubTotal = {currentSubTotal} updateSubTotal = {updateSubTotal}/>
    </div>
  )
}
