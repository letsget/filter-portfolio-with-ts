import { ProjectType } from '../types';

export const filterProjects = (
  projects: ProjectType[],
  filter: string
): ProjectType[] => projects.filter(({ category }) => category === filter);
