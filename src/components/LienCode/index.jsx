import React from "react";
import "./lienCode.css";


function LienCode ({title}) {
    return(
        <ul className="liens-list"> 
            <li className="lien">
                <a className="lien-a" href={title} target="blank">	
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Code
                </a>
            </li>
        </ul>
    )
}
export default LienCode;