/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import * as Styled from './searchbar.styled';

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
    <Styled.Container>
      <Styled.InputWrapper>
        <Styled.Label htmlFor="filter">Search Todo</Styled.Label>
        <Styled.Input
          id="filter"
          type="text"
          value={filter}
          name="Search Todo"
          onChange={onChangeFilter}
          placeholder="Search todo name..."
        />
      </Styled.InputWrapper>
      <Styled.BtnList>
        <Styled.Button type="button" onClick={onFilterByAll}>
          All
        </Styled.Button>
        <Styled.Button type="button" onClick={onFilterByPublic}>
          Public
        </Styled.Button>
        <Styled.Button type="button" onClick={onFilterByPrivate}>
          Private
        </Styled.Button>
        <Styled.Button type="button" onClick={onFilterByCompleted}>
          Completed
        </Styled.Button>
      </Styled.BtnList>
    </Styled.Container>
  );
};

export default Searchbar;
