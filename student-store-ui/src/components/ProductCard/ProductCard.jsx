import * as React from "react"
import "./ProductCard.css"


export function ProductCard({product, productId}) {
    console.log(product.image);
    return (
    <div className="card bg-white rounded-lg shadow-md" >
        <img 
            className="product-card-image" 
            src={product.image} alt={product.name} 
            style={{ height: "200px", objectFit: "cover" }}
        />
    </div>
  )
};

export default ProductCard