import React from "react";
import "./Footer.css"

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p className="copyright">Copyright 2024</p>
                <nav className="footer-menu">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookies</a>
                    <a href="#">Accessibility</a>
                </nav>

            </div>


        </footer>
    );
};

export default Footer;
