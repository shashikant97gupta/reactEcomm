import React from "react";
import './style.css';
import logo from '../../assets/brandLogo.jpg'

const Header = (props) => {
    return ( 
        <header className="header">
           <div className="wrap">
            <div className="logo">
                <img src={logo} alt="brand logo" />
            </div>
            <div></div>
            </div>            
        </header>
     );
}

export default Header;