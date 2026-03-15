import { getProducts } from "../data/product"
import { ProductCard } from "../components/ProductCard";

export function Home() {  
    const products = getProducts();
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