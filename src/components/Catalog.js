import React, {useState, useEffect, useRef} from 'react';
import "../styles/General.css";
import "../styles/Catalog.css";
import "../styles/Products.css";
import ProductsService from '../services/products.service';
import ProductsList from "./ProductsList"

const Catalog = () =>{
    const inputRef = useRef(null);
    const checkRef = useRef();
    const [select, setSelected] = useState()
    const [products, setProducts] = useState(ProductsService.getProducts());
    const [manufacturers] = useState(ProductsService.getManufacturers())
    
    const handleInputChange = (typeOfInput, parameters)=>{
        if(typeOfInput==="radio"){
                parameters ? setSelected(parameters) : setSelected("");
                return checkRef.current.checked==="checked";
          
        }else if(typeOfInput==="text"){
            setProducts(ProductsService.getProducts(parameters))
        }
    }
    
    const onClear = (e) =>{
        e.preventDefault()
        setProducts(ProductsService.getProducts())
        inputRef.current.value=""
        
    }
    
    useEffect(()=>{  
        setProducts(ProductsService.getProducts(select));  
        
    },[select])

    return(
        

<div className="container">
    <h1 className="header-big">Catalog</h1>
    <div className="catalog">
        <div className="column-left">
        <div className="filter">
                <div className="filter-header">
                    <h4>Search</h4>
                    <a href="/" onClick={onClear} className="clear">Clear</a>
                </div>
                <div>
                    <input ref={inputRef} onKeyUp={()=>{handleInputChange("text",inputRef)}} type="text" placeholder="search..."/>
                </div>
                <h4>Manufacturer</h4>
                <div>
                    <div>
                        <input type="radio" name="manufacturere" id="all"  ref={checkRef} onClick={()=>handleInputChange("radio")} value="all" />
                        <label htmlFor="all">All</label>
                    </div>
                   {manufacturers.map((manufacturer, index)=>{
                       return(
                        <div key={index}>
                            <input type="radio" name="manufacturere" id={manufacturer} ref={checkRef} onClick={()=>handleInputChange("radio", manufacturer)} value="apple"/>
                            <label htmlFor={manufacturer}>{manufacturer}</label>
                        </div>
                        )
                   })}
                
                </div>
            </div>
        </div>
        <div className="column-right">
            <ProductsList products={products}></ProductsList>
        </div>
    </div>
</div>
    )
}


export default Catalog;