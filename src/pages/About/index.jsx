import React from 'react';
import Banniere from "../../components/Banniere/index";
import Features from "../../components/Features/index" ;
import Rncp from '../../components/Rncp/index';
import Certif from "../../components/Certif/index";
import CanvasSnowfall from "../../components/CanvasSnowfall/index";
import './about.css';

function About() {
    return (
        <div className= "AProposPage">
            <CanvasSnowfall />
            <Banniere />
            <Rncp text = "Titre*web*developer*" />
            <Certif />
            <Features/>
        </div>
    )
}
export default About;