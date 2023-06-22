import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
//import ProductCard from "../ProductCard/ProductCard"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home({products}) {
  console.log({products});
  
    return (
    <div className="home">
        <Hero />
        <ProductGrid products={products}/>
    </div>
  )
}
