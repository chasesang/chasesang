import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import './App.css';
import Profile from './components/Profile';



const App = props => {
const profileData = props.jsonObj.basics;


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
                   {/* <About aboutData={aboutData} />
                   <Work workData={workData} />
                   <Skills skillsData={skillsData} />
                   <Education educationData={educationData} /> */}
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
