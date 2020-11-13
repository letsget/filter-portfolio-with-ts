import { ProjectType } from './types';

export const filterProjects = (
  projects: ProjectType[],
  filter: string
): ProjectType[] => projects.filter((project) => project.category === filter);
