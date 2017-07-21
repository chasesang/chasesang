import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import './App.css';
import Profile from './components/Profile';
import Summary from './components/Summary';
import Work from './components/Work';
import TechnicalSkills from './components/TechnicalSkills';
import Education from './components/Education';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const App = props => {
const profileData = props.jsonObj.basics;
const summaryData = profileData.summary;
const workData = props.jsonObj.work;
const skillsData = props.jsonObj.skills;
const educationData = props.jsonObj.education;
    return (
      <div className="container">
        <div className="row"> <h1>Chase Sang</h1> </div>
        <h2> About |  Engineering  |  Web Development  |  Hangouts  |  Destinations  |  Fun  | Thought Sketches </h2>
        <Router>
          <div>
            <ul className="nav navbar-nav">
              <li><Link to="/">Summary</Link></li>
              <li><Link to="/about">Profile</Link></li>
              <li><Link to="/topics">Work</Link></li>
            </ul>

            <hr/>

            <Route exact path="/summary" component={Summary}/>
            <Route path="/about" component={Profile}/>
            <Route path="/topics" component={Work}/>
          </div>
        </Router>




             <div className="row">
               <aside className="col-md-4">
                 <div className="inner">
                   <Profile profileData={profileData} />
                 </div>
               </aside>
               <main className="col-md-8">
                <div className="inner">
                <Summary summaryData={summaryData} />
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
