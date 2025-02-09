import React , { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./ProductDetail.css"


export default function ProductDetail(){
    const { productId } = useParams();
    const [product, setProduct] = useState("");

    useEffect(() =>{
        const apiCall = async () =>{
            const response = await fetch(`http://localhost:3001/store/${productId}`);
            const data = await response.json();
            console.log(data.product);
            setProduct(data.product);
        };
        apiCall();
      }, []);

    return(
        <div className="product-detail">
            <div className="product-detail-content">
                <div className="product-header">
                    <h1>{product.name}</h1>
                </div>
                <div className="product-image" >
                    <img src= {product.image} alt={product.name} />
                </div>
                <div className="product-info">
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
            </div>
        </div>
    )
}