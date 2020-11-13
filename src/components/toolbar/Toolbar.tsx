import React, { FC } from "react";
import ToolBarItem from "./ToolBarItem";

type ToolbarProps = {
  filters: string[];
  selected: string;
  onSelectFilter: (filter: string) => void;
};

const Toolbar: FC<ToolbarProps> = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="filters">
      {filters.map((filter: string, index: number) => (
        <ToolBarItem
          key={index}
          selected={selected}
          filterName={filter}
          onSelectFilter={onSelectFilter}
        />
      ))}
    </div>
  );
};

export default Toolbar;
