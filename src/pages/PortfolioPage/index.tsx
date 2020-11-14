import React, { FC, useState, useMemo } from 'react';
import { nanoid } from 'nanoid';
import Portfolio from '../../components/portfolio';
import { PROJECTS } from '../../common/constants';
import { ProjectType } from '../../types';

const projectsWithIds = PROJECTS.map((project: ProjectType) => ({
  id: nanoid(),
  ...project,
}));

const PortfolioPage: FC = () => {
  return <Portfolio projects={projectsWithIds} />;
};

export default PortfolioPage;
