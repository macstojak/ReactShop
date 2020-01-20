import React from "react";
import PropTypes from "prop-types";

const Product = (props) =>{
    const {name, image, ammount} = props.product;
    return(
         <div className="product">
                <img src={image} alt={name}/>
                <p className="price">{ammount}</p>
                <h3>{name}</h3>
            </div>
    )
}

Product.defaultProps = {
    name: "Product",
    ammount: "0",
    image: "#"
}
Product.propTypes = {
    name: PropTypes.string,
    ammount: PropTypes.string,
    image: PropTypes.string
}

export default Product;