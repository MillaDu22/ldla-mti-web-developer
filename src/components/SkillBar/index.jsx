import React, { useEffect, useState } from 'react';
import "./SkillBar.css";

const SkillBar = ({ skillName, percentage }) => {
    const [progress4, setProgress4] = useState(0);

    useEffect(() => {
        const fillProgress4 = () => {
            let currentProgress4 = 0;
            const targetProgress4 = percentage;
            const animationDuration4 = 2000; // 2 secondes//
            const increment = (targetProgress4 / animationDuration4) * 10;
            const interval4 = setInterval(() => {
                currentProgress4 += increment;
                if (currentProgress4 >= targetProgress4) {
                    currentProgress4 = targetProgress4;
                    clearInterval(interval4);
                }
                setProgress4(currentProgress4);
            }, 10);
        };
        fillProgress4(); // Appel initial du remplissage progressif// 
        const restartAnimation4 = () => {
            const restartInterval4 = setInterval(() => {
                setProgress4(0); // Réinitialise la progrèss à 0
                fillProgress4(); // Redémarre l'animation
            }, 15000); // Toutes les 15 secondes
            return () => clearInterval(restartInterval4);
        };
        restartAnimation4(); // Appel initial du redémarrage de l'animation     
    }, [percentage]);

    return (
        <div className="skill">
            <div className="skill-name">{skillName}</div>
            <div className="skill-bar">
                <div className="skill-level" style={{ width: `${progress4}%` }}>
                    {Math.round(progress4)}%
                </div>
            </div>
        </div>
    );
};

export default SkillBar;
