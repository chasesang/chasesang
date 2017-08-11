import React from 'react';
import Profile from './Profile';
import Summary from './Summary';
import Introducation from './Introducation';

const json = require('../resume.json');

const About = props => {
  const profileData = json.basics;
  const introData = json.basics.introducation;
  return(
    <div className="row">
      <aside className="col-md-4">
        <div className="inner">
          <Profile profileData={profileData} />
        </div>
      </aside>
      <main className="col-md-8">
       <div className="inner">
       <Introducation introData={introData} />

        </div>
      </main>
    </div>
  )
}

export default About;
