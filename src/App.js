import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import './App.css';
import About from './components/About';
import Profile from './components/Profile';
import Engineering from './components/Engineering';
import Summary from './components/Summary';
import Work from './components/Work';
import Project from './components/Project';
import TechnicalSkills from './components/TechnicalSkills';
import Education from './components/Education';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const App = props => {
const profileData = props.jsonObj.basics;
const summaryData = profileData.summary;
const workData = props.jsonObj.work;
const projectData = props.jsonObj.project;
const skillsData = props.jsonObj.skills;
const educationData = props.jsonObj.education;
    return (


        <Router>
          <div>
          <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
              <li><NavLink to="/">About</NavLink></li>
              <li><NavLink to="/engineering">Engineering</NavLink></li>
              <li><NavLink to="/web">Web Development</NavLink></li>
              <li><NavLink to="/hangouts">Hangouts</NavLink></li>
              <li><NavLink to="/words">Words</NavLink></li>
              <li><NavLink to="/pictures">Pictures</NavLink></li>
            </ul>
          </nav>
            <Route exact path="/" component={About}/>
            <Route path="/engineering" component={Engineering}/>
            <Route path="/web" component={Project}/>
            <Route path="/hangouts" component={Work}/>
            <Route path="/words" component={Work}/>
            <Route path="/pictures" component={Work}/>
          </div>
        </Router>

    );
}
App.propTypes = {
    jsonObj: PropTypes.object.isRequired
}

export default App;
