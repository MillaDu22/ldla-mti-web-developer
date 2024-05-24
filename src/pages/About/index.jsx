import React from 'react';
import Banniere from "../../components/Banniere/index";
import Features from "../../components/Features/index" ;
import Certif from "../../components/Certif/index";
import CanvasSnowfall from "../../components/CanvasSnowfall/index";
import './about.css';

function About() {
    return (
        <div className= "AProposPage">
            <CanvasSnowfall />
            <Banniere />
            <Certif />
            <Features/>
        </div>
    )
}
export default About;