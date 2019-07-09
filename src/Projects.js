import React from 'react';
import './App.css';

function Projects({name}){
    return (
        <div className="content__projects__item">
            <h3>{name}</h3>
        </div>
    );
}


export default Projects;