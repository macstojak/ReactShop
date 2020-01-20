import React from "react";
import Product from "./Product";
import "../styles/Products.css";
import PropTypes from "prop-types";

const ProductsList = (props) =>{
    const products = props.products;
    return(
    <div className="products">
                {products.map((p, index) =>{
                    return(
                    <Product key={index} product={p}></Product>
                    )
                })}
            </div>
    )
}
ProductsList.defaultProps = {
    products: []
}
ProductsList.propTypes = {
    products: PropTypes.array
}
export default ProductsList;