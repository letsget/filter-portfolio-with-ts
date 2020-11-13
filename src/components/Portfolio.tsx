import React, { FC, useState } from "react";
import ProjectList from "./ProjectList";
import Toolbar from "./toolbar/Toolbar";
import { filterProjects } from "../common/helpers";
import { FILTERS, PROJECTS } from "../common/constants";
import { ProjectType } from "../common/types";

const Portfolio: FC = () => {
  const [selected, setSelected] = useState<string>("All");

  const onSelectFilter = (filter: string): void => {
    setSelected(filter);
  };

  const projectsToRender: ProjectType[] =
    selected === "All" ? PROJECTS : filterProjects(PROJECTS, selected);

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
