import React, { FC } from 'react';
import { ProjectType } from '../../types';

interface Props {
  projects: ProjectType[];
}

const ProjectList: FC<Props> = ({ projects }) => (
  <div className="projects">
    {projects.map((project: ProjectType) => (
      <div key={project.id}>
        <img className="image" src={project.img} alt="portfolio item" />
      </div>
    ))}
  </div>
);

export default ProjectList;
