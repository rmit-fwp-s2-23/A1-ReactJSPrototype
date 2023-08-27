import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <Link to="/">Home</Link>
                <Link to="/cinemas">Cinemas</Link>
            </div>
            <div>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
}; 

export default Navbar;
