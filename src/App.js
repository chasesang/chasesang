import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import './App.css';
import Profile from './components/Profile';
import Summary from './components/Summary';
import Work from './components/Work';
import TechnicalSkills from './components/TechnicalSkills';
import Education from './components/Education';
import { BrowserRouter as Router } from 'react-router-dom'

const App = props => {
const profileData = props.jsonObj.basics;
const summaryData = profileData.summary;
const workData = props.jsonObj.work;
const skillsData = props.jsonObj.skills;
const educationData = props.jsonObj.education;
    return (
      <div className="container">
             <div className="row">

                 <div className="inner">
                   <Profile profileData={profileData} />
                 </div>
                <div className="inner">
                <Summary summaryData={summaryData} />
                <Work workData={workData} />
                <TechnicalSkills skillsData={skillsData} />
                <Education educationData={educationData} />
                 </div>
             </div>
           </div>
    );
}
App.propTypes = {
    jsonObj: PropTypes.object.isRequired
}

export default App;
