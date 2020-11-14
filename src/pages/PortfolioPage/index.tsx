import React, { FC, useState, useMemo } from 'react';
import { nanoid } from 'nanoid';
import Portfolio from '../../components/portfolio';
import { PROJECTS } from '../../common/constants';
import { ProjectType } from '../../types';

const PortfolioPage: FC = () => {
  const projectsWithIds = PROJECTS.map((project: ProjectType) => ({
    id: nanoid(),
    ...project,
  }));

  return <Portfolio projects={projectsWithIds} />;
};

export default PortfolioPage;
