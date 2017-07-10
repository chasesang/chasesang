import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import './App.css';
import Profile from './components/Profile';
import Summary from './components/Summary';
import Work from './components/Work';
import TechnicalSkills from './TechnicalSkills';
import Education from './Education';


const App = props => {
const profileData = props.jsonObj.basics;
const summaryData = profileData.summary;
const workData = props.jsonObj.work;
const skillsData = props.jsonObj.skills;
const educationData = props.jsonObj.education;

    return (
      <div className="container">
             <div className="row">
               <aside className="col-md-4">
                 <div className="inner">
                   <Profile profileData={profileData} />
                 </div>
               </aside>
               <main className="col-md-8">
                 <div className="inner">
                <strong><Summary summaryData={summaryData} /></strong>
                <Work workData={workData} />
                   <TechnicalSkills skillsData={skillsData} />
                   <Education educationData={educationData} />
                 </div>
               </main>
             </div>
           </div>
    );

}
App.propTypes = {
    jsonObj: PropTypes.object.isRequired
}

export default App;
