import React, { FC } from 'react';
import { ProjectType } from '../../types';

interface Props {
  projects: ProjectType[];
}

const ProjectList: FC<Props> = ({ projects }) => (
  <div className="projects">
    {projects.map(({ id, img }: ProjectType) => (
      <div key={id}>
        <img className="image" src={img} alt="portfolio item" />
      </div>
    ))}
  </div>
);

export default ProjectList;
