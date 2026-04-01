import axios from "axios";


export async function getProductsApi() {
    let data;
    let productsList;
try {
    data = await axios.get("http://localhost:5000/products");
    productsList = data?.data;
    
} catch (error) {
    
}
console.log(productsList);
return productsList;
}

export async function getProductsApiById(id: number) {
    let data;
    let productsList;
try {
    data = await axios.get(`http://localhost:5000/products/${id}`);
    productsList = data?.data;
    
} catch (error) {
    
}
console.log(productsList);
return productsList;
}