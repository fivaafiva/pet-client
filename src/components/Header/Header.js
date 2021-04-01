import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";




function Header() {
    return (
        <div className="header">
            <Link to="/" className="link">
                <h1 className="header__logo">petsDate</h1>
            </Link>


            <div className="header__nav">
            {/*    <Link to={"/login"} >*/}
            {/*        <div className="header__option">*/}
            {/*            <div className="navbar__item">Sign in</div>*/}
            {/*        </div>*/}
            {/*    </Link>*/}



            </div>

        </div>
    )
}

export default Header;