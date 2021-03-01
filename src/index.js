import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import TagsList from './components/TagsList';
import skills from './components/skills';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<TagsList tags={skills} parent="about__skill"/>, document.getElementById('about__skills-list'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
