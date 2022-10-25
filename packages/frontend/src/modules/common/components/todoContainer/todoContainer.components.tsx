import React, { useState } from 'react';
import Searchbar from '../searchbar';
import TodoList from '../todoList';
import Modal from '../modal';
import * as Styled from './todoContainer.styled';

const TodoContainer = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filter, setFilter] = useState('');
  const [isShowModal, setIsShowModal] = useState(false);

  const handleClickModal = () => {
    setIsShowModal((prevIsShowModal) => !prevIsShowModal);
  };

  const handleChangeFilter = (text: string) => {
    setFilter(text);
  };

  return (
    <Styled.Container>
      <Styled.Button type="button" onClick={handleClickModal}>
        Create Todo
      </Styled.Button>
      {isShowModal && <Modal onClick={handleClickModal} />}
      <Searchbar handleChangeFilter={handleChangeFilter} />
      <TodoList filter={filter} />
    </Styled.Container>
  );
};
export default TodoContainer;
