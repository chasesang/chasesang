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

        <Router>
          <div>
            <ul className="nav navbar-nav">
              <li><Link to="/">About</Link></li>
              <li><Link to="/engineering">Engineering</Link></li>
              <li><Link to="/web">Web Development</Link></li>
              <li><Link to="/hangouts">Hangouts</Link></li>
              <li><Link to="/world">Word</Link></li>
              <li><Link to="/thought">Thought Sketches</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Summary}/>
            <Route path="/engineering" component={Profile}/>
            <Route path="/web" component={Work}/>
            <Route path="/hangouts" component={Work}/>
            <Route path="/world" component={Work}/>
            <Route path="/thought" component={Work}/>
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
