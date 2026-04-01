import { getProducts } from "../data/product"
import ProductCard from "../components/ProductCard";
import { getProductsApi } from "../services/product.service";
import { useEffect, useState } from "react";

export default function Home() {
    const [products, setProducts] = useState();

    useEffect(()=> {
async function  fetchAllProducts(){
        const products = await getProductsApi();
        setProducts(products);
    }
    fetchAllProducts();
    }, [])


    
    return (
        <div className="page">
            <div className="home-hero">
                <h1 className="home-title"> Welcome to Shophub</h1>
                <p className="home-subtitle"></p>
            </div>
            <div className="container">
                <h2 className="page-title">Our Products</h2>
            </div>

            <div className="container">
                <div className="product-grid">
                    {products?.map((product) => {
                        return (
                            <ProductCard product={product} />
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
} 