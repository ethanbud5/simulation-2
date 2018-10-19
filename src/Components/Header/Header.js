import React from "react";
import {Link} from "react-router-dom";
import "./Header.css"

function Header(props){

    return(
        <div>
            <header>
                <img src="https://raw.githubusercontent.com/DevMountain/simulation-2/master/assets/houser_logo.png" alt="logo"/>
                <div className="logo_text">
                    Houser
                </div>
            </header>
        </div>
    )
}

export default Header;