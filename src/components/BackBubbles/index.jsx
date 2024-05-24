import React from 'react';
import './backBubbles.css';

const BackBubbles = () => {
    return (
        <div className ="container-backbubbles">
            <div className="wrapper-bubbles">
                {Array.from({ length: 15 }, (_, index) => (
                    <div key={index} className="bubble">
                        <span className="dot"></span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BackBubbles;