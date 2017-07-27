import React from 'react';
import WorkItem from './WorkItem';
const json = require('../resume.json');


const workData =json.work;

const Engineering = props => {
    const getWorkExperience = () => {
        const workItems = [];
      workData.forEach((val, index) => {
          workItems.push(<WorkItem key={index} workItemData={val}/>);
        })
        return workItems;
    }

    return (
      <div className="container-fluid">
      <section className="work" >
        <h2 className="text-uppercase"><i className="fa fa-lg fa-building"></i> Work experience</h2>
        {getWorkExperience()}
      </section>
    </div>
    );
};

export default Engineering;
