import logo from "../../assets/car-lot-icon.png";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header-container">
            <div className="logo-column">
                <img src={logo} alt="header logo" />
            </div>
            <nav className="header-links">
                <Link to="/" className="link">Home</Link>
                <Link to="/get-ticket" className="link" onClick={() => { window.localStorage.removeItem("ticket"); }}>Get Ticket</Link>
                <Link to="/calculate-price" className="link">Calculate Price</Link>
                <Link to="/payment" className="link">Pay Ticket</Link>
                <Link to="/check-ticket-state" className="link">Check Ticket State</Link>
                <Link to="/check-free-spaces" className="link">Check Free Spaces</Link>
            </nav>
        </div>
    );
}

export default Header;
