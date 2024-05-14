import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

function Card({ id, cover, alt, title, informations }) {
    return (
        <div className= "card">
            <Link to={`/projet/${id}`} className="card-link">
                <img src={cover} alt={alt} className="card-image" />
                <h3 className="card-title">{title}</h3>
                <div className="card-details">
                    <h4 className= "title-info">{title}</h4>
                    <p className="card-info">{informations}</p>
                </div>
            </Link>
        </div>
    );
}

export default Card;

