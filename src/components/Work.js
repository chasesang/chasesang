import React from 'react';
import WorkItem from './WorkItem';

const json = require('../resume.json');


const workData =json.work;

const Work = props => {
    const getWorkExperience = () => {
        const workItems = [];
      workData.forEach((val, index) => {
          workItems.push(<WorkItem key={index} workItemData={val}/>);
        })
        return workItems;
    }



    return (
      <section className="work">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-building"></i> Work experience</h2>
        {getWorkExperience()}
      </section>
    );
};

export default Work;
