import React from "react";
import littleLemonLogo from "../assets/logo_footer.png"

function Footer() {
    return (
            <footer className="footer">
                <img src={littleLemonLogo} alt="Little Lemon Logo" className="footer-img"/>
                <div className="footer-flex">
                    <h4 className="footer-title">Navigation</h4>
                    <a href="" className="footer-link">Home</a>
                    <a href="" className="footer-link">About</a>
                    <a href="" className="footer-link">Menu</a>
                    <a href="" className="footer-link">Reservations</a>
                    <a href="" className="footer-link">Order Online</a>
                    <a href="" className="footer-link">Login</a>
                    </div>
                <div className="footer-flex">
                    <h4 className="footer-title">Contact</h4>
                    <p className="footer-text">Adress</p>
                    <p className="footer-text">Phone number</p>
                    <p className="footer-text">e-mail</p>
                    </div>
                    <div className="footer-flex">
                    <h4 className="footer-title">Social Media Links</h4>
                    <a href="" className="footer-link">Instagram</a>
                    <a href="" className="footer-link">Facebook</a>
                    <a href="" className="footer-link">Twitter</a>
                    </div>
            </footer>
    )
}

export default Footer;