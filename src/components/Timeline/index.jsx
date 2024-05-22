/*import React, { useEffect } from 'react';
import "./timeline.css";

const Timeline = () => {

    useEffect(() => {
        const handleScroll = () => {
            const boxes = document.querySelectorAll(".box");
            const triggerBottom = (window.innerHeight / 5) * 4;

            boxes.forEach((box) => {
                const topBox = box.getBoundingClientRect().top;
                if (topBox < triggerBottom) {
                    box.classList.add("show");
                } else {
                    box.classList.remove("show");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        // Initial call to display content
        handleScroll();

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section id="timeline">
            <h2 className="heading">Quelques projets de mon parcours</h2>
            <ul>
                <li>
                    <i className="fa-brands fa-html5"></i>
                    <div className="box">
                        <h3 className="title-time"><span className="year">Html5/Css3</span>Riding Cities</h3>
                        <p>
                            Le projet Riding Cities: Mes premiers pas vers le langage HTML.
                        </p>
                        <button><a className="a-button" href="https://milladu22.github.io/riding-cities/" target="blank">Voir le site</a></button>
                    </div>
                </li>
                <li>
                    <i className="fa-brands fa-css3"></i>
                    <div className="box">
                        <h3 className="title-time"><span className="year">Html5/Sass</span>Ohmyfood!</h3>
                        <p>
                            Le projet Ohmyfood: Implémentation et amélioration de l'interface du site mobile avec des animations CSS.
                        </p>
                        <button><a className="a-button" href="https://milladu22.github.io/OhMyFood/" target="blank">Voir le site</a></button>
                    </div>
                </li>
                <li>
                    <i className="fa-brands fa-html5"></i>
                    <div className="box">
                        <h3 className="title-time">
                            <span className="year">Html5/css3</span>Booki</h3>
                        <p>
                            Le projet Booki: Création de la page d'accueil d'une agence de voyage avec HTML & CSS.
                        </p>
                        <button><a className ="a-button" href="https://milladu22.github.io/booki-agence-de-voyage/" target="blank">Voir le site</a></button>
                    </div>
                </li>
                <li>
                    <i className="fa-brands fa-js"></i>
                    <div className="box">
                        <h3 className="title-time"><span className="year">Html5/Css3/JS</span>Print-it</h3>
                        <p>
                        Le projet Print-It: Mes premiers pas vers le langage JavaScript.
                        </p>
                        <button><a className ="a-button" href="https://milladu22.github.io/Print-it-JS/" target="blank">Voir le site</a></button>
                    </div>
                </li>
                <li>
                    <i className="fa-brands fa-react"></i>
                    <div className="box">
                        <h3 className="title-time"><span className="year">React</span>Kasa</h3>
                        <p>
                            Le projet kasa: Création d'une application web de location immobilière avec React.
                        </p>
                        <button><a className ="a-button" href="https://milladu22.github.io/Kasa/" target="blank">Voir le site</a></button>
                    </div>
                </li>
                <li>
                    <i className="fa-brands fa-js"></i>
                    <div className="box">
                        <h3 className="title-time"><span className="year">JavaScript</span>Nina Carducci</h3>
                        <p>
                            Le projet Photographe Nina Carducci: Optimisation et référencement.
                        </p>
                        <button><a className ="a-button" href="https://milladu22.github.io/nina-carducci/" target="blank">Voir le site</a></button>
                    </div>
                </li>
                <li>
                    <i className="fa-brands fa-js"></i>
                    <div className="box">
                        <h3 className="title-time"><span className="year">JavaScript</span>GameOn</h3>
                        <p>
                            Le projet GameOn: Création, avec JavaScript, de la landing page d'une PME spécialisée dans les concours de jeux.
                        </p>
                        <button><a className ="a-button" href="https://milladu22.github.io/GameOn-website-FR/" target="blank">Voir le site</a></button>
                    </div>
                </li>
                <li>
                    <i className="fa-brands fa-js"></i>
                    <div className="box">
                        <h3 className="title-time"><span className="year">JavaScript</span>FishEye</h3>
                        <p>
                            Le projet FishEye: Création d'un site accessible pour une plateforme de photographes.
                        </p>
                        <button><a className ="a-button" href="https://milladu22.github.io/Front-End-Fisheye/" target="blank">Voir le site</a></button>
                    </div>
                </li>
                <li>
                    <i className="fa-brands fa-js"></i>
                    <div className="box">
                        <h3 className="title-time"><span className="year">JavaScript</span>Les petits plats</h3>
                        <p>
                            Le projet Les petits plats: Développement d'algorithmes de recherche en JavaScript.
                        </p>
                        <button><a className ="a-button" href="https://milladu22.github.io/Les-petits-plats/" target="blank">Voir le site</a></button>
                    </div>
                </li>
                <li>
                    <i className="fa-brands fa-react"></i>
                    <div className="box">
                        <h3 className="title-time"><span className="year">Html5/Sass</span>Wealth Health</h3>
                        <p>
                            Le projet Wealth Health: Passage d'une librairie JQuery vers React.
                        </p>
                        <button><a className ="a-button" href="https://milladu22.github.io/rhnet-wealth-health/" target="blank">Voir le site</a></button>
                    </div>
                </li>
                <li>
                    <i className="fa-brands fa-js"></i>
                    <div className="box">
                        <h3 className="title-time">
                        <span className="year">Html5/css3/JS</span>Sophie Bluel</h3>
                        <p>
                            Le projet Architecte Sophie Bluel: Création d'une page web dynamique avec JavaScript.
                        </p>
                        <button><a className ="a-button" href="https://github.com/MillaDu22/Portfolio-Architecte-Sophie-Bruel" target="blank">Voir le code</a></button>
                    </div>
                </li>
                <li>
                    <i className="fa-brands fa-js"></i>
                    <div className="box">
                        <h3 className="title-time"><span className="year">Html5/Css3/JS</span>724 events</h3>
                        <p>
                            Le projet 724events: Deboggage du site de l'agence d'évènementiel.
                        </p>
                        <button><a className ="a-button" href="https://github.com/MillaDu22/724events" target="blank">Voir le code</a></button>
                    </div>
                </li>
                <li>
                    <i className="fa-brands fa-react"></i>
                    <div className="box">
                        <h3 className="title-time"><span className="year">React</span>Argent Bank</h3>
                        <p>
                            Le projet Argent-Bank: Implémentation du front-end de l'application bancaire avec React.
                        </p>
                        <button><a className ="a-button" href="https://github.com/MillaDu22/ArgentBank-website" target="blank">Voir le code</a></button>
                    </div>
                </li>
                <li>
                    <i className="fa-brands fa-js"></i>
                    <div className="box">
                        <h3 className="title-time"><span className="year">JavaScript</span>Bills app</h3>
                        <p>
                            Le projet Bills-app: Deboggage et tests d'un SaaS RH.
                        </p>
                        <button><a className ="a-button" href="https://github.com/MillaDu22/bills-app" target="blank">Voir le code</a></button>
                    </div>
                </li>
                <li>
                    <i className="fa-brands fa-react"></i>
                    <div className="box">
                        <h3 className="title-time"><span className="year">React</span>SportSee</h3>
                        <p>
                            Le projet SportSee: Développement d'un tableau de bord d'analytics avec React.
                        </p>
                        <button><a className ="a-button" href="https://github.com/MillaDu22/sportsee" target="blank">Voir le code</a></button>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default Timeline;*/

import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import datasProjects from '../../DatasProjects/datasProjects.json';
import "./timeline.css";

const Timeline = () => {

    useEffect(() => {
        const handleScroll = () => {
            const boxes = document.querySelectorAll(".box");
            const triggerBottom = (window.innerHeight / 5) * 4;

            boxes.forEach((box) => {
                const topBox = box.getBoundingClientRect().top;
                if (topBox < triggerBottom) {
                    box.classList.add("show");
                } else {
                    box.classList.remove("show");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        // Initial call to display content //
        handleScroll();

        // Cleanup the event listener on component unmount //
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section id="timeline">
            <h2 className="heading">Portfolio</h2>
            <ul>
                {datasProjects.map((project) => (
                    <li key={project.id}>
                        <i className={`fa-brands ${project.iconClass}`}></i>
                        <div className="box">
                            <Link to={`/projet/${project.id}`} className="card-link">
                                <img src={project.cover} alt={project.alt} className="card-image" />
                                <h3 className="title-time">
                                    <span className="year">{project.tagCover}</span>
                                    {project.title}
                                </h3>
                                <p className="card-info">{project.informations}</p>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Timeline;

