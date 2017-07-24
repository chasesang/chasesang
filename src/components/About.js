import React from 'react';
import Profile from './Profile';
import Summary from './Summary';
const json = require('../resume.json');

const About = props => {
  const profileData = json.basics;
  const summaryData = json.summary;
  return(
    <div className="row">
      <aside className="col-md-3">
        <div className="inner">
          <Profile profileData={profileData} />
        </div>
      </aside>

    </div>
  )
}

export default About;
