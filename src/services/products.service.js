import products from '../products';

class ProductsService {
  
   static getProducts(company) {
    if(company){
          if(typeof company === "string"){
            let comp = company.charAt(0).toUpperCase() + company.slice(1)
            return products.filter(product=>product.manufacture===comp)
            
          }else{
            let string = company.current.value.toUpperCase();
            return products.filter(product=>product.manufacture.toUpperCase().includes(string))
          } 
    }
    else{
     return products;
    }
    
  }

  static getFeaturedProducts() {
    return products.filter(product => product.featured === true);
  }
  static getManufacturers(){
    let manufacturers = products.map(element=>element.manufacture).filter(function(value,index,arr){
      return arr.indexOf(value)===index;
  })
    return manufacturers;
  }
}


export default ProductsService;