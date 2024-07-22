import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import datasProjects from '../../DatasProjects/datasProjects.json';
import BackStars from "../BackStars/index";
import "./timeline.css";

const Timeline = () => {
    const [category, setCategory] = useState('tous');

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

    const filteredProjects = category === 'tous'
        ? datasProjects
        : datasProjects.filter(project => project.category === category);

    return (
        <section id="timeline">
            <h2 className="heading">Portfolio</h2>
            <div className="filter-buttons">
                <button
                    onClick={() => setCategory('tous')}
                    className={category === 'tous' ? 'active' : ''}
                >
                    Tous
                </button>
                <button
                    onClick={() => setCategory('ocr')}
                    className={category === 'ocr' ? 'active' : ''}
                >
                    OCR
                </button>
                <button
                    onClick={() => setCategory('perso')}
                    className={category === 'perso' ? 'active' : ''}
                >
                    Perso
                </button>
            </div>
            <BackStars />
            <ul>
                {filteredProjects.map((project) => (
                    <li key={project.id}>
                        <i className={`fa-brands ${project.iconClass}`}></i>
                        <div className="box">
                            <div className="shadow-card-timeline">
                                <Link to={`/projet/${project.id}`} className="card-link">
                                    <img src={project.cover} alt={project.alt} className="card-image" />
                                    <h3 className="title-time">
                                        <span className="year">{project.tagCover}</span>
                                        {project.title}
                                    </h3>
                                    <p className="card-info">{project.informations}</p>
                                </Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Timeline;


