import React from 'react';
import InfoProject from '../../components/InfoProject/index';
import Loader from '../../components/Loader/index';
import './project.scss';


function Project() {
    return (
        <div className= "projet-page">
                <Loader />
                <InfoProject className="info-project" />
        </div>
    )
}
export default Project;