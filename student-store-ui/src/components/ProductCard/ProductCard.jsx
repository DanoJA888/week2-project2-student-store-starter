import * as React from "react"
import "./ProductCard.css"

/*
export function ProductCard({product, productId}) {
    
    return (
    <div className="product-card">
        <img 
            src={product.image} 
            alt={product.name} 
            className="product-card-image"
        />
        <div>
            <h4 className="product-card-font">{product.name}</h4>
            <p className="product-card-font">${product.price.toFixed(2)}</p>
        </div>
    </div>
  )
};

export default ProductCard;
 */

export function ProductCard({product, productId}){
    
    return(
        <div className="product-card">
            <img 
                src={product.image} 
                alt={product.name}
                className="product-card-image"    
            />
            <div className="product-card-font">
                <h4>{product.name}</h4>
                <p>${product.price.toFixed(2)}</p>
            </div>
        </div>
    )
}
export default ProductCard;