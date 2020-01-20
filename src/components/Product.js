import React from "react";
import PropTypes from "prop-types";

const Product = (props) =>{
    return(
         <div className="product">
                <img src={props.product.image} alt={props.product.name}/>
                <p className="price">{props.product.ammount}</p>
                <h3>{props.product.name}</h3>
            </div>
    )
}

Product.propTypes = {
    name: PropTypes.string,
    ammount: PropTypes.number
}

export default Product;