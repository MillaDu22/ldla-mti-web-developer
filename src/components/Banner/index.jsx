import React from "react";
import Portrait from '../../assets/images/photo-moi.webp';
import "./banner.css";

function Banner () {
    return(
        <div className="banner">
            <div className="container-txt-image">
                <div className="box-txt">
                    <p className= "txt-welcome">Après 23 années passées dans le domaine de la sécurité privée,
                        J'ai choisi de me reconvertir, dans le secteur du développement web.
                    </p>
                    <p className="txt-visit">Vous pouvez consulter quelques projets réalisés durant mon parcours d'intégrateur web et de développeur d'applications JavaScript React. </p>
                </div>
                <span className="circle">
                    <img className= "portrait-header" src = {Portrait} alt ="portrait" />
                </span>
            </div>
            <h2 className= "welcome">Bienvenue sur mon site !</h2>
        </div>
    )
}
export default Banner;