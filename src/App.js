import React from 'react';
import logo from './logo.svg';
import './App.scss';
// import projects from './assets/projects.js';
import drum_machine_bg from './images/drum-machine-preview.png';
import twitch_tv_bg from './images/twitch-tv-preview.png';
import markdown_previewer_bg from './images/markdown-previewer-preview.png';
import quote_machine_bg from './images/quote-machine-preview.png';
import local_weather_app_bg from './images/weather-app-preview.png';
import survey_form_bg from './images/survey-form-preview.png';
import wiki_viewer_bg from './images/wiki-viewer-preview.png';
import landing_page_bg from './images/landing-page-preview.png';
import tech_docs_bg from './images/tech-docs-preview.png';
import tribute_page_bg from './images/tribute-page-preview.png';
import landing_page_v2_bg from './images/landing-page-v2-preview.png';



const App = (props) => {
  const projects = [
    {name:"Twitch TV", description:"JQuery, Twitch API",link:"https://annestezia.github.io/TwitchTV/",level:"span-2",bg: twitch_tv_bg},
    {name:"Markdown Previewer", description:"marked.js",link:"https://annestezia.github.io/fcc-markdown-previewer/", level:"span-2", bg: markdown_previewer_bg},
    {name:"Drum Machine", description:"React",link:"https://annestezia.github.io/fcc-drum-machine/",level:"span-2", bg: drum_machine_bg},
    {name:"Quote Machine", description:"fetch, Quotesondesign API",link:"https://annestezia.github.io/fcc-quote-machine/",level:"span-1",bg: quote_machine_bg},
    {name:"Local Weather App", description:"Dark Sky weather API, ip geolocation, jQuery",link:"https://annestezia.github.io/Local-weather-app/",level:"span-2", bg: local_weather_app_bg},
    {name:"Tech Docs", description:"Tech Docs, adaptive",link:"https://codepen.io/Annestezia/full/aKZmQO",level:"span-1", bg: tech_docs_bg},
    {name:"Wiki Viewer", description:"Wikipedia API, jQuery",link:"https://annestezia.github.io/WikiViewer/",level:"span-1", bg: wiki_viewer_bg},
    {name:"Landing Page v2", description:"Waypoints.js, Feather icons",link:"https://annestezia.github.io/fcc-lp2/",level:"span-1", bg: landing_page_v2_bg},
    {name:"Tribute Page ", description:"HTML, Bootstrap, Font Awesome",link:"https://annestezia.github.io/TributePage/",level:"span-1", bg: tribute_page_bg},
    {name:"Survey Form", description:"Form", link:"http://github.com", level:"span-1", bg: survey_form_bg  },
    {name:"Landing Page", description:"Waypoints.js, Feather icons",link:"https://annestezia.github.io/fcc-lp2/",level:"span-1", bg: landing_page_bg}
  ];

  return(

  <>
    {projects.map(project => (
      <div className= {`project-tile ${project.level}`} key={project.name} id = {
          project.name.split(' ').join('-').toLowerCase()} style={{
          backgroundImage:`url(${project.bg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        <a href={project.link} title= "Open repo or  gh-page">
          <h3 className="project-title">{project.name}</h3>
          <span className = "description">{project.description}</span>
          <span className = "overlay"></span>
        </a>
      </div>
    ))}
  </>
)};

export default App;
