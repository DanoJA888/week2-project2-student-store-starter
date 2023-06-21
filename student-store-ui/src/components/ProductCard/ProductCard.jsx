import * as React from "react"
import "./ProductCard.css"


export function ProductCard({product, productId}) {
    console.log(product.image);
    return (
    <div >
        <img src={product.image} alt={product.name} />
    </div>
  )
};

export default ProductCard