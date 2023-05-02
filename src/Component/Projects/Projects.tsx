import React from 'react';

import s from "./Projects.module.css"
import shared from "../../shared/sharedStyles.module.css"
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={`${s.projectsWrapper} ${shared.container}`}>
            <h2 className={s.title}>My projects</h2>
          <div className={s.projects}>
            <Project />
            <Project />
          </div>


        </div>
    );
};

export default Projects;