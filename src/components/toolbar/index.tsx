import React, { FC } from 'react';
import { nanoid } from 'nanoid';
import ToolBarItem from '../toolbarItem';

interface ToolbarProps {
  filters: string[];
  selected: string;
  onSelectFilter: (filter: string) => void;
}

const Toolbar: FC<ToolbarProps> = ({ filters, selected, onSelectFilter }) => (
  <div className="filters">
    {filters.map((filter: string) => (
      <ToolBarItem
        key={nanoid()}
        selected={selected}
        filterName={filter}
        onSelectFilter={onSelectFilter}
      />
    ))}
  </div>
);

export default Toolbar;
