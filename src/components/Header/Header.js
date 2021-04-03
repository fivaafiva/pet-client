import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";



function Header() {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark">

                <Link to="/" className="link">
                    <h2 className="header__logo">petsDate</h2>
                </Link>

                <div navbar__options>
                    <span header__nav>Sign In</span>
                    <span header__nav>Already have an account?</span>
                </div>

            </nav>
        </div>
    )
}

export default Header;