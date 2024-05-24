import React from "react";
import "./lienSite.css";

function LienSite ({title}) {
    return(
        <ul className="liens-list"> 
            <li className="lien">
                <a className="lien-a" href={title} target="blank">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Site
                </a>
            </li>
        </ul>
    )
}
export default LienSite;