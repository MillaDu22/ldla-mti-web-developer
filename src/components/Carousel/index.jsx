/*import React, { useState, useEffect, useCallback, useMemo } from "react";
import CanvasWaves from "../CanvasWaves/index";
import CanvasPaint from "../CanvasPaint/index";
import "./carousel.scss";

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = useMemo(() => [
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
            ),
            isCanvasActive: false
        },
        {
            id: 2,
            content: (
                <div className="container-loader">
                    <div className="ring">
                        <h4>Loading...</h4>
                    </div>
                </div>
            ),
            isCanvasActive: false
        },
        {
            id: 3,
            content: (
                <div className="container-background">
                    <h4 className="title-back">Pure CSS Gradient Background Animation</h4>
                </div>
            ),
            isCanvasActive: false
        },
        {
            id: 4,
            content: (
                <div className="container-text">
                    <h4 className="text-anim">Pure Css Text Animation Effect</h4>
                </div>
            ),
            isCanvasActive: false
        },
        {
            id: 5,
            content: <CanvasWaves />,
            isCanvasActive: false
        },
        {
            id: 6,
            content: <CanvasPaint />,
            isCanvasActive: false
        }
    ], []);

    // Fonction pour passer à la diapositive suivante //
    const nextSlide = useCallback(() => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    }, [currentSlide, slides.length]);

    // Fonction pour passer à la diapositive précédente //
    const previousSlide = useCallback(() => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    }, [currentSlide, slides.length]);

    // Changement de diapositive automatique //
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Changement de diapositive toutes les 5 secondes //
        return () => clearInterval(interval);
    }, [nextSlide]);

    // Fonction pour activer/désactiver le canvas en fonction de la diapositive //
    useEffect(() => {
        const updateCanvasActivity = () => {
            slides.forEach((slide, index) => {
                if (index === currentSlide) {
                    slide.isCanvasActive = true;
                } else {
                    slide.isCanvasActive = false;
                }
            });
        };
        updateCanvasActivity();
    }, [currentSlide, slides]);

    return (
        <div className="carousel">
            <h3 className="title-carousel">Animations</h3>
            <div className="container-arrows">
                {slides.length > 1 && (
                    <i className="fa-solid fa-chevron-left left" onClick={previousSlide}></i>
                )}
                {slides.length > 1 && (
                    <i className="fa-solid fa-chevron-right right" onClick={nextSlide}></i>
                )}
            </div>
            <div className="slide">
                {slides.map((slide, index) => (
                    <div key={slide.id} className={`slide-content ${currentSlide === index ? "active" : "inactive"}`}>
                        {slide.content}
                        {slide.isCanvasActive && (
                            <>
                                {slide.id === 5 && <CanvasWaves />}
                                {slide.id === 6 && <CanvasPaint />}
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;*/


import React, { useState, useEffect, useCallback, useMemo } from "react";
import CanvasWaves from "../CanvasWaves/index";
import CanvasPaint from "../CanvasPaint/index";
import "./carousel.scss";

// Hook personnalisé pour détecter si l'utilisateur est sur un appareil mobile
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
};

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const isMobile = useIsMobile(); // Utiliser le hook pour vérifier si l'appareil est mobile

    const slides = useMemo(() => {
        const baseSlides = [
            {
                id: 1,
                content: (
                    <div className="container-ellipses">
                        <div className="react-ellipses">
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
                ),
            },
            {
                id: 2,
                content: (
                    <div className="container-loader">
                        <div className="ring">
                            <h4>Loading...</h4>
                        </div>
                    </div>
                ),
            },
            {
                id: 3,
                content: (
                    <div className="container-background">
                        <h4 className="title-back">Pure CSS Gradient Background Animation</h4>
                    </div>
                ),
            },
            {
                id: 4,
                content: (
                    <div className="container-text">
                        <h4 className="text-anim">Pure Css Text Animation Effect</h4>
                    </div>
                ),
            }
        ];

        if (!isMobile) {
            baseSlides.push(
                {
                    id: 5,
                    content: <CanvasWaves />,
                },
                {
                    id: 6,
                    content: <CanvasPaint />,
                }
            );
        }

        return baseSlides;
    }, [isMobile]);

    // Fonction pour passer à la diapositive suivante
    const nextSlide = useCallback(() => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    }, [currentSlide, slides.length]);

    // Fonction pour passer à la diapositive précédente
    const previousSlide = useCallback(() => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    }, [currentSlide, slides.length]);

    // Changement de diapositive automatique
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Changement de diapositive toutes les 5 secondes
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <div className="carousel">
            <h3 className="title-carousel">Animations</h3>
            <div className="container-arrows">
                {slides.length > 1 && (
                    <i className="fa-solid fa-chevron-left left" onClick={previousSlide}></i>
                )}
                {slides.length > 1 && (
                    <i className="fa-solid fa-chevron-right right" onClick={nextSlide}></i>
                )}
            </div>
            <div className="slide">
                {slides.map((slide, index) => (
                    <div key={slide.id} className={`slide-content ${currentSlide === index ? "active" : "inactive"}`}>
                        {slide.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
