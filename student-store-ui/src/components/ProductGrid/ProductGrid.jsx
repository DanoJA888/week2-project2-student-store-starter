import * as React from "react"
import "./ProductGrid.css"
import dataSet from "../../../../student-store-express-api/data/db.json"
import ProductCard from "../ProductCard/ProductCard"


export default function ProductGrid({products, category, search, currentCart, updateCart, currentSubTotal, updateSubTotal}){
    const renderedProducts = category === "All Categories" ? products : products.filter(product => product.category === category);
    const finalRenderedProducts = search === "" ? renderedProducts : renderedProducts.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    return(
        <div className="product-grid">
            <h3 className="product-grid-heading">Best Selling Products</h3>
            <div className="product-grid-cards">
                {
                    finalRenderedProducts.map((product) => (
                        <div className="product-grid-item">
                            
                                <ProductCard key={product.name} product={product} productId={product.id} currentCart = {currentCart} updateCart={updateCart} currentSubTotal = {currentSubTotal} updateSubTotal = {updateSubTotal}/>
                            
                        </div>     
                   ))
                }
            </div>
        </div>
    )
}