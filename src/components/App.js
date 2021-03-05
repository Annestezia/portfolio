import React from 'react';
import './App.scss';
import projects from './projects';
import TagsList from './TagsList';
import ToggleMore from './ToggleMore';


const App = () => {
  return(
  <>
    {projects.map((project, i )=> {
      const {title, demo, code, description, img, tags}=project;
      return (<div className= {`project-tile`} key={title} id = {title.split(' ').join('-').toLowerCase()}>        
        <h3 className="project-tile__title">{title}</h3>
        <img src={img} className="project-tile__image" alt = {description}/>
        <div className = "project-tile__info info">
          <div className ="project-tile__buttons">
            <a href={code} className="btn" title={`See ${title} code`} target="_blank" rel="noopener noreferrer">code</a>
            <a href={demo} className="btn" title= {`See ${title} demo`} target="_blank" rel="noopener noreferrer">demo</a>            
          </div>          
          <ToggleMore text={description}/>       
          <TagsList tags={tags} parent = "project-tile__tag"/>
        </div>        
      </div>)
    })}
  </>
)};


export default App;