import { Link } from "react-router-dom";

export default function NavBar(
) {

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/home" className="navbar-brand">ShopHub</Link>
            </div>
            <div className="navbar-container">
                <Link to="/checkout" className="navbar-link">cart</Link>
            </div>
            <div className="navbar-links">
                <Link to="/home" className="navbar-link">Home</Link>
            </div>
            <div className="navbar-auth">
                <div className="navbar-auth-links">
                    <Link to="/auth" className="btn btn-secondary">Login</Link>
                    <Link to="/auth" className="btn btn-primary">Signup</Link>
                </div>
            </div>
        </nav>

    )
}