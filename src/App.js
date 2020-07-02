import React from 'react';
import './App.scss';
import projects from './assets/projects.js';

const App = () => {

  return(

  <>
    {projects.map(project => (
      <div className= {`project-tile ${project.level}`} key={project.title} id = {
          project.title.split(' ').join('-').toLowerCase()} style={{
          backgroundImage:`url(${project.bg})`
        }}>
        <a href={project.link} title= {`${project.title} demo`} target="_blank" rel="noopener noreferrer">
          <div className="overlay">
            <h3 className="project-title">{project.title}</h3>
            <span className = "project-description">{project.description}</span>
          </div>
        </a>
      </div>
    ))}
  </>
)};

export default App;
