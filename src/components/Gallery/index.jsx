import React, {useState} from 'react';
import "./gallery.css";
import Card from "../Card/index";
import datasProjects from '../../DatasProjects/datasProjects.json';

function Gallery() {
    const [filter, setFilter] = useState("all");

    const handleFilter = (category) => {
        setFilter(category);
    };

    const filteredProjects = datasProjects.filter(project => {
        if (filter === "all") {
            return true;
        } else {
            return project.Tags.includes(filter);
        }
    });

    const isActive = (category) => {
        return category === filter ? "active" : "";
    };

    return (
        <section className="gallery">
            <h2 className="title-gallery">Portfolio</h2>
            <div className="container-filtrage">
                <span className="filters">Filtrer par</span>
                <div id="filter-buttons">
                    <button className={`filter-button ${isActive("all")}`} onClick={() => handleFilter("all")}>Tous</button>
                    <button className={`filter-button ${isActive("Html5")}`} onClick={() => handleFilter("Html5")}>Html5/Css3</button>
                    <button className={`filter-button ${isActive("JavaScript")}`} onClick={() => handleFilter("JavaScript")}>JavaScript</button>
                    <button className={`filter-button ${isActive("React")}`} onClick={() => handleFilter("React")}>React</button>
                </div>
            </div>
            <div className="galleryGrid">
                {filteredProjects.map((project) => (
                    <Card
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        cover={project.cover}
                        alt={project.alt}
                        informations={project.informations}
                    />    
                ))}
            </div>
        </section>
    );
}

export default Gallery;






