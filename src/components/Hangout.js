import React from 'react';
import ProjectItem from './ProjectItem';
const json = require('../resume.json');

const projectData = json.project;
const Project = props => {
  const getProjectExperience = () => {
    const projectItems = [];
    projectData.forEach((val,index) => {
      projectItems.push(<ProjectItem key={index}
      projectItemData={val}/>);
    })
    return projectItems;
  }

  return (
    <section className="project">
      <h2 className="text-uppercase"><i className="fa fa-lg fa-building"></i> Project</h2>
      {getProjectExperience()}

    </section>
  );
};
export default Project;
