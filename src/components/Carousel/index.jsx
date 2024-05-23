import React, { useState, useEffect, useCallback } from "react";
import "./carousel.scss";

function Carousel(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            id: 1,
            content: (
                <div className="container-ellipses">
                    <div className= "react-ellipses">
                        <section>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </section>
                        <section>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </section>
                    </div>
                    <h4 className="title-react">Pure CSS React ellipses Animation</h4>
                </div>
            )
        },
        {
        id:2, content: (
            <div className ="container-loader">
                <div className="ring">
                    <h4>Loading...</h4>
                </div>
            </div>
            )
        },
        {
            id:3, content: (
                <div className ="container-background">
                    <h4 className="title-back">Pure CSS Gradient Background Animation</h4>
                </div>
            )
        },
        {
            id:4, content: (
                <div className ="container-text">
                    <h4 className="text-anim">Pure Css Text Animation Effect</h4>
                </div>
            )
        }
        
    ];

    // Function to handle next slide //
    const nextSlide = useCallback(() => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    }, [currentSlide, slides.length]);

    // Function to handle previous slide //
    const previousSlide = useCallback(() => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    }, [currentSlide, slides.length]);

    // Automatic slide change //
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <div className ="carousel">
            <h3 className ="title-carousel">Animations</h3>
            <div className="container-arrows">
                {slides.length > 1 && <i className="fa-solid fa-chevron-left left" onClick={previousSlide}></i>}
                {slides.length > 1 && <i className="fa-solid fa-chevron-right right" onClick={nextSlide}></i>}
            </div>
            <div className="slide">
                {slides.map((slide, index) => (
                    <div  key={slide.id} className={`slide-content ${currentSlide === index ? "active" : "inactive"}`}>
                        {slide.content}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Carousel;
