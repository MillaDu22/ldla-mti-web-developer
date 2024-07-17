import React from "react";
import "./tag.css";

function Tags ({title}) {
    return(
        <div className = "shadow-tag">
            <span className="motCle">{title}</span>
        </div>
    )
}
export default Tags;