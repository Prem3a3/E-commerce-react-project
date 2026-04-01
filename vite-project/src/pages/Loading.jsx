import { useEffect, useState } from "react";
import { getProducts } from "../data/product"

export function GetTestProduct() {

    let [products, setProducts] = useState();
    let [loader, setLoading] = useState(true);
    console.log("1")

    useEffect(() => {
        try {
            products = getProducts();
            setProducts(products);
    console.log("2")
        } catch (error) { 
            console.error(error?.message);
        }
        finally{
            setLoading(false);
        }

   
    }, [])
 if (loader) {
        return <h2>Loading...{console.log("laoder")}</h2>;
    }
    return (
        <>
            <div>{products?.map((pr, key) => {
    console.log("3")
                return <h1>Product {pr?.name} has been found</h1>
            })}</div>


        </>
    )
}