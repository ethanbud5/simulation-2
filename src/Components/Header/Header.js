import React from "react";
import {Link} from "react-router-dom";
import "./Header.css"

function Header(props){

    return(
        <div>
            <header>
                <div className="content_container">
                    <img src="https://raw.githubusercontent.com/DevMountain/simulation-2/master/assets/houser_logo.png" alt="logo"/>
                    <h1 className="logo_text">
                        Houser
                    </h1>
                </div>
            </header>
        </div>
    )
}

export default Header;