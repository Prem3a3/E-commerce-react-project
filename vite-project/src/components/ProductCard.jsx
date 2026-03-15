import { Link } from "react-router-dom";

export function ProductCard({product}) {
    return (

        <div className="product-card" key={product?.id}>

            <img src={product?.image} className="product-card-image"></img>
            <div className="product-card-content">
                <h3 className="product-card-name">{product?.name}</h3>
                <h3 className="product-card-price">${product?.price}</h3>
                <div className="product-card-actions">
                    <Link className="btn btn secodary">View Details</Link>
                    <button className="btn btn primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}