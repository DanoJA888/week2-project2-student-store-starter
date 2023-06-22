import * as React from "react"
import "./ProductGrid.css"
import dataSet from "../../../../student-store-express-api/data/db.json"
import ProductCard from "../ProductCard/ProductCard"
/* 
const productsOnSale = dataSet.products
export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemToCart}) {
    console.log(productsOnSale)
    return (
        <div className="product-grid">
            <h3 className="product-grid-heading">Best Selling Products</h3>
            <div className="product-grid-cards">
                {
                    productsOnSale.map((product) =>(
                        <div className="product-grid-item">
                            <ProductCard key={product.name} product={product} productId={product.id}/>
                        </div>     
                ))}
            </div>
        </div>
    )}

*/
export default function ProductGrid({products}){
    
    return(
        <div className="product-grid">
            <h3 className="product-grid-heading">Best Selling Products</h3>
            <div className="product-grid-cards">
                {
                    products.map((product) =>(
                        <div className="product-grid-item">
                            <ProductCard key={product.name} product={product} productId={product.id}/>
                        </div>     
                ))}
            </div>
        </div>
    )
}