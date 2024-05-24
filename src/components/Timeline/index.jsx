import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import datasProjects from '../../DatasProjects/datasProjects.json';
//import CanvasPolygon from "../CanvasPolygon/index";
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
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section id="timeline">
            <h2 className="heading">Portfolio</h2>
            {/*<CanvasPolygon />*/}
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

