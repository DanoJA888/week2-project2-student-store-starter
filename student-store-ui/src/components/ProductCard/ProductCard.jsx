import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"
import {useState} from "react"

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

export function ProductCard({product, currentCart, updateCart, productId}){
    const [totalProduct, setTotal] = useState(0);
    
    function addItem(){
        setTotal(totalProduct + 1);
        if (currentCart[productId] === undefined) {
            currentCart[productId] = 1;
        } else {
            currentCart[productId] = currentCart[productId] + 1;
        }
    }
    function subtractTotal(){
        if (totalProduct > 0) {
            setTotal(totalProduct -1);
        }
        if (currentCart[productId] !== undefined){
            currentCart[productId] = currentCart[productId] - 1;
        }
    }
    return(
        <div className="product-card">
            <Link to={`/product/${product.id}`}>
            <img 
                src={product.image} 
                alt={product.name}
                className="product-card-image"    
            />
            </Link>
            <div className="product-card-font">
                <h4>{product.name}</h4>
                <p>${product.price.toFixed(2)}</p>
            </div>
            <div>
                <button id="addToCart" onClick={() => addItem()}>+</button>
                <button id="addToCart" onClick={() => subtractTotal()}>-</button>
                {totalProduct > 0 &&
                    <p>{totalProduct}</p>
                }
            </div>
        </div>
    )
}
export default ProductCard;