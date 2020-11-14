/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions */
import React, { FC } from 'react';

type ToolBarItemProps = {
  filterName: string,
  selected: string,
  onSelectFilter: (filter: string) => void,
};

const ToolBarItem: FC<ToolBarItemProps> = ({
  filterName,
  selected,
  onSelectFilter,
}) => (
  <div
    className={
      selected === filterName ? 'toolbar-item__active' : 'toolbar-item'
    }
    onClick={() => onSelectFilter(filterName)}
  >
    {filterName}
  </div>
);

export default ToolBarItem;
