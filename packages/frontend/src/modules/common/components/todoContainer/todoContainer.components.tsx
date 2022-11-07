import React, { useState } from 'react';
import Searchbar from '../searchbar';
import TodoList from '../todoList';
import Modal from '../modal';
import * as Styled from './todoContainer.styled';

const TodoContainer = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filter, setFilter] = useState('');
  const [filterByPrivate, setFilterByPrivate] = useState(false);
  const [filterByPublic, setFilterByPublic] = useState(false);
  const [filterByCompleted, setFilterByCompleted] = useState(false);
  const [filterByAll, setFilterByAll] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  const handleClickModal = () => {
    setIsShowModal((prevIsShowModal) => !prevIsShowModal);
  };

  const handleChangeFilter = (text: string) => {
    setFilter(text);
  };

  const handleFilterByPrivate = () => {
    setFilterByPrivate((prevState) => !prevState);
    setFilterByPublic(false);
    setFilterByAll(false);
    setFilterByCompleted(false);
  };

  const handleFilterByPublic = () => {
    setFilterByPublic((prevState) => !prevState);
    setFilterByPrivate(false);
    setFilterByAll(false);
    setFilterByCompleted(false);
  };

  const handleFilterByCompleted = () => {
    setFilterByCompleted((prevState) => !prevState);
    setFilterByPublic(false);
    setFilterByPrivate(false);
    setFilterByAll(false);
  };

  const handleFilterByAll = () => {
    setFilterByAll((prevState) => !prevState);
    setFilterByPrivate(false);
    setFilterByPublic(false);
    setFilterByCompleted(false);
  };

  return (
    <Styled.Container>
      <Styled.Button type="button" onClick={handleClickModal}>
        Create Todo
      </Styled.Button>
      {isShowModal && <Modal onClick={handleClickModal} />}
      <Searchbar
        handleChangeFilter={handleChangeFilter}
        handleFilterByPrivate={handleFilterByPrivate}
        handleFilterByPublic={handleFilterByPublic}
        handleFilterByCompleted={handleFilterByCompleted}
        handleFilterByAll={handleFilterByAll}
      />
      <TodoList
        filter={filter}
        filterByPrivate={filterByPrivate}
        filterByPublic={filterByPublic}
        filterByCompleted={filterByCompleted}
        filterByAll={filterByAll}
      />
    </Styled.Container>
  );
};
export default TodoContainer;

// import React, { useState } from 'react';
// import { useGetAllTodos } from '../../hooks/useGetAllTodos';
// import Searchbar from '../searchbar';
// import TodoList from '../todoList';
// import Modal from '../modal';
// import * as Styled from './todoContainer.styled';

// const TodoContainer = () => {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [isShowModal, setIsShowModal] = useState(false);
//   const [filter, setFilter] = useState('');
//   const [all, setAll] = useState(true);
//   const [privateStatus, setPrivateStatus] = useState(false);
//   const [completedStatus, setCompletedStatus] = useState(false);

//   const queryAllTodos = useGetAllTodos(filter, privateStatus, completedStatus, all);
//   // console.log('todos', queryAllTodos?.data?.data);

//   const handleClickModal = () => {
//     setIsShowModal((prevIsShowModal) => !prevIsShowModal);
//   };

//   const handleChangeFilter = (text: string) => {
//     setFilter(text);
//     queryAllTodos.refetch();
//   };

//   const handleAllFilter = () => {
//     setAll((prevStatus) => !prevStatus);
//     setPrivateStatus(false);
//     setCompletedStatus(false);
//     queryAllTodos.refetch();
//   };

//   const handleFilterPrivate = (btnStatus: boolean) => {
//     setPrivateStatus(btnStatus);
//     setAll(false);
//     setCompletedStatus(false);
//     queryAllTodos.refetch();
//   };

//   const handleFilterCompleted = () => {
//     setCompletedStatus((prevStatus) => !prevStatus);
//     setAll(false);
//     setPrivateStatus(false);
//     queryAllTodos.refetch();
//   };

//   return (
//     <Styled.Container>
//       <Styled.Button type="button" onClick={handleClickModal}>
//         Create Todo
//       </Styled.Button>
//       {isShowModal && <Modal onClick={handleClickModal} />}
//       <Searchbar
//         handleChangeFilter={handleChangeFilter}
//         handleAllFilter={handleAllFilter}
//         handleFilterPrivate={handleFilterPrivate}
//         handleFilterCompleted={handleFilterCompleted}
//       />
//       <TodoList
//         todos={queryAllTodos?.data?.data}
//         isLoading={queryAllTodos.isLoading}
//         isError={queryAllTodos.isError}
//       />
//     </Styled.Container>
//   );
// };
// export default TodoContainer;
