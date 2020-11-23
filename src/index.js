import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProjectsList from './components/ProjectsList';
// import SkillsList from './components/SkillsList';
import * as serviceWorker from './serviceWorker';
// import BadgesList from './Project/BadgesList';
// import skills from '../src/assets/skills';

ReactDOM.render(<ProjectsList />, document.getElementById('root'));
// ReactDOM.render(<SkillsList />, document.getElementById('about__skills-list'));
// ReactDOM.render(<BadgesList badges={skills}/>, document.getElementById('skills'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
