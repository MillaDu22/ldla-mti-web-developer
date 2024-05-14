import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Britain from '../../assets/images/britain-logo.webp';
import Navbar from '../Navbar/index';

function Header() {
    return(
        <div className = "container-header">
            <Link className = "container-containers" to="/">
                <div className="container-title-france">
                    <h1 className="title-app">WEB DEVELOPER</h1>
                    <div className="bleu-blanc-rouge">
                        <span className="bleu"></span>
                        <span className="blanc"></span>
                        <span className="rouge"></span>
                    </div>
                </div>
                <div className="container-logo-subtitle">
                    <img className ="britain" src = {Britain} alt="Britain-logo"/>
                    <h2 className = "subtitle-app">Ludmilla Marti</h2>
                </div>
            </Link>
            <Navbar />
        </div>
    )
}
export default Header;