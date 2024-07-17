import React, { useEffect, useState } from 'react';
import "./SkillBar.css";

const SkillBar = ({ skillName, percentage }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (percentage < 0 || percentage > 100) {
            console.error('Percentage must be between 0 and 100');
            return;
        }

        setProgress(0); // Réinitialise avant de commencer l'animation //

        let currentProgress = 0;
        const animationDuration = 2000; // 2 secondes //
        const increment = (percentage / animationDuration) * 10; // Incrément pour chaque intervalle //

        const interval = setInterval(() => {
            currentProgress += increment;
            if (currentProgress >= percentage) {
                currentProgress = percentage;
                clearInterval(interval);
            }
            setProgress(Math.min(currentProgress, 100));
        }, 10);

        return () => clearInterval(interval); // Nettoie l'intervalle à la fin ou lors du démontage //
    }, [percentage]);

    return (
        <div className="skill">
            <div className="skill-name">{skillName}</div>
            <div className = "shadow-skill-bar">
                <div className="skill-bar">
                    <div className="skill-level" style={{ width: `${progress}%` }}>
                        {percentage}%
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillBar;
