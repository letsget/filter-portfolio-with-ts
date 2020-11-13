import React, { FC } from "react";

type ToolBarItemProps = {
  filterName: string;
  selected: string;
  onSelectFilter: (filter: string) => void;
};

const ToolBarItem: FC<ToolBarItemProps> = ({
  filterName,
  selected,
  onSelectFilter,
}) => {
  return (
    <div
      className={
        selected === filterName ? "toolbar-item__active" : "toolbar-item"
      }
      onClick={() => onSelectFilter(filterName)}
    >
      {filterName}
    </div>
  );
};

export default ToolBarItem;
