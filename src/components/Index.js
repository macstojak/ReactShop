import React from "react";
import "../styles/General.css";
import ProductsService from "../services/products.service.js";
import ProductsList from "./ProductsList";

const Index = () =>{
    const products= ProductsService.getFeaturedProducts();

    const desktops = products.filter(element=>{
        return element.category==="desktop"
    })
    const tablets = products.filter(element=>{
        return element.category==="tablet"
    })
    return(
        <div className="container">
        <h1 className="header-big">Welcome to our store</h1>
            <div>
                <h2 className="header-small">Desktops</h2>
                   <ProductsList products={desktops}></ProductsList>
            </div>
            <div>
                <h2 className="header-small">Tablets</h2>
                    <ProductsList products={tablets}></ProductsList>
            </div>
          
     </div>
    )
}



export default Index;