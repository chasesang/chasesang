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
const Appp = () => (
  <Router>
    <div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
export default App;
