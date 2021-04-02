import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";


function Header() {
    return (
        <div className="header">
            <Link to="/" className="link">
                <h2 className="header__logo">petsDate</h2>
            </Link>
        </div>
    )
}

export default Header;