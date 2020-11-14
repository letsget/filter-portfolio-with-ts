import React, { FC, useState } from 'react';
import ProjectList from '../projectList';
import Toolbar from '../toolbar';
import { filterProjects } from '../../common/helpers';
import { FILTERS } from '../../common/constants';
import { ProjectType } from '../../types';

interface Props {
  projects: ProjectType[];
}

const Portfolio: FC<Props> = ({ projects }) => {
  const [selected, setSelected] = useState<string>('All');

  const onSelectFilter = (filter: string): void => {
    setSelected(filter);
  };

  const projectsToRender: ProjectType[] =
    selected === 'All' ? projects : filterProjects(projects, selected);

  console.log(projectsToRender);

  return (
    <div className="container">
      <Toolbar
        onSelectFilter={onSelectFilter}
        selected={selected}
        filters={FILTERS}
      />
      <ProjectList projects={projectsToRender} />
    </div>
  );
};

export default Portfolio;
