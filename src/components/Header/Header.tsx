import React, { useState } from "react";
import "./Header.css";

import SuperNetLOGO from "../../assets/images/SuperNet LOGO.png";

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header>
            <div className="container">

                <div className="logo">
                    <a href="/">
                        <img src={SuperNetLOGO} alt="" />
                    </a>
                </div>

                <button className="menu-toggle" aria-controls="menu" aria-expanded="false" onClick={toggleMenu}>
                    <span className="menu-icon"><i className="fa-solid fa-bars"></i></span>
                </button>

                <nav className={menuOpen ? "open" : ""}>
                    <ul className="menu">
                        <li><a href="/" className="menu-link" onClick={closeMenu}>Features</a></li>
                        <li><a href="/" className="menu-link" onClick={closeMenu}>Edge Network</a></li>
                        <li><a href="/" className="menu-link" onClick={closeMenu}>Pricing</a></li>
                    </ul>

                    <button className="signUp-btn" onClick={closeMenu}>Sign Up</button>
                </nav>

                {menuOpen && (
                    <button className="close-toggle" aria-controls="menu" aria-expanded={menuOpen} onClick={closeMenu}>
                        <span className="close-icon"><i className="fa-solid fa-square-xmark"></i></span>
                    </button>
                )}

            </div>
        </header>
    );
};

export default Header;
