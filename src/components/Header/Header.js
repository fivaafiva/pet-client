import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";
// import petsDateLogo from 'src/images/petsDateLogo.PNG';



function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo"
                     src="https://drive.google.com/drive/u/0/my-drive" alt="petsApp-logo"
                />

                <h1 className="header__logo">petsLogo</h1>
            </Link>


            <div className="header__nav">
                <Link to={"/login"}>
                    <div
                         className="header__option">
                        <span className="header__optionLineTwo">Sign in</span>
                    </div>
                </Link>



            </div>

        </div>
    )
}

export default Header;