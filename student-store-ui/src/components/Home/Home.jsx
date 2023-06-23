import React , { useEffect, useState } from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import Search from "../Search/Search"

//import ProductCard from "../ProductCard/ProductCard"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home() {
  const [products, setProducts] = useState([]);
  const [currCategory, setCategory] = useState("All Categories");
  const [currSearchTerm, setSearchTerm] = useState("");

  useEffect(() =>{
    const apiCall = async () =>{
        const response = await fetch(`https://codepath-store-api.herokuapp.com/store`);
        const data = await response.json();
        console.log(data.products);
        setProducts(data.products);
    };
    apiCall();
  }, []);
  
    return (
    <div className="home">
        <Hero />
        <Search filtering = {setCategory} currentSearch={currSearchTerm} setSearch={setSearchTerm}/>
        <ProductGrid products={products} category = {currCategory} search = {currSearchTerm}/>
    </div>
  )
}
