import React, { useState } from 'react';

interface IProps {
  handleChangeFilter: (text: string) => void;
  handleFilterByPrivate: () => void;
  handleFilterByPublic: () => void;
  handleFilterByAll: () => void;
  handleFilterByCompleted: () => void;
}

const Searchbar = ({
  handleChangeFilter,
  handleFilterByPrivate,
  handleFilterByPublic,
  handleFilterByCompleted,
  handleFilterByAll
}: IProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filter, setFilter] = useState('');

  const onChangeFilter = (e: any) => {
    setFilter(e.currentTarget.value);
    handleChangeFilter(e.currentTarget.value);
  };

  const onFilterByPrivate = () => {
    handleFilterByPrivate();
  };

  const onFilterByPublic = () => {
    handleFilterByPublic();
  };

  const onFilterByCompleted = () => {
    handleFilterByCompleted();
  };

  const onFilterByAll = () => {
    handleFilterByAll();
  };

  return (
    <div>
      {/* <label htmlFor="filter">Search Todo</label> */}
      <input
        id="filter"
        type="text"
        value={filter}
        name="Search Todo"
        onChange={onChangeFilter}
        placeholder="title"
      />
      <ul>
        <button type="button" onClick={onFilterByAll}>
          All
        </button>
        <button type="button" onClick={onFilterByPublic}>
          Public
        </button>
        <button type="button" onClick={onFilterByPrivate}>
          Private
        </button>
        <button type="button" onClick={onFilterByCompleted}>
          Completed
        </button>
      </ul>
    </div>
  );
};

export default Searchbar;
