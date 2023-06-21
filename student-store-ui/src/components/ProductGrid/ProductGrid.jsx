import * as React from "react"
import "./ProductGrid.css"
import dataSet from "../../../../student-store-express-api/data/db.json"
import ProductCard from "../ProductCard/ProductCard"

const productsOnSale = dataSet.products
export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemToCart}) {
    console.log(productsOnSale)
    return (
        <div className="product-grid">
            {
                productsOnSale.map((product) =>(
                    <ProductCard key={product.name} product={product} productId={product.id}/> 
                    
                
            ))}
        </div>
    )}