import React from "react";
import shopMens from '../../assets/shopMen.jpg';
import shopWomen from '../../assets/shopWomen.jpg';
import './style.css'

function Directory() {
    return ( <div className="directory">
            <div className="wrap">
                <div className="item"
                 style={{backgroundImage:`url(${shopWomen})`}}>
                    <a>
                        Shop Women
                    </a>
                </div>
                <div className="item"
                 style={{backgroundImage:`url(${shopMens})`}}>
                    <a>
                        Shop Men
                    </a>
                </div>
            </div>
    </div> );
}

export default Directory;