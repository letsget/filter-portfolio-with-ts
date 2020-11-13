import React, { FC } from 'react';
import { nanoid } from 'nanoid';
import { ProjectType } from '../common/types';

type ProjectListProps = {
  projects: ProjectType[],
};

const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="projects">
      {projects.map((project: ProjectType) => (
        <div key={nanoid()}>
          <img className="image" src={project.img} alt="portfolio item" />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
