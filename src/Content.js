import React from 'react';
import Projects from './Projects';
import './App.css';

function Content({name}) {
    return (
    <div className="content">
      <h2>Projects</h2>
      <div className="content__projects">
        <Projects name="Project 1"/>
        <Projects name="Project 2"/>
        <Projects name="Project 3"/>
      </div>
    </div>
    );
  }
  
  export default Content;