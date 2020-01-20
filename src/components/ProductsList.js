import React from "react";
import Product from "./Product";
import "../styles/Products.css";

const ProductsList = (props) =>{
    return(
    <div className="products">
                {props.products.map((product, index) =>{
                    return(
                    <Product key={index} product={product}></Product>
                    )
                })}
            </div>
    )
}
export default ProductsList;