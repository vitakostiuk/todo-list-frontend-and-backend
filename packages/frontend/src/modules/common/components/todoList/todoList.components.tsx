import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useLocation } from 'react-router-dom';
import { useGetAllTodos } from '../../hooks/useGetAllTodos';
import { useRemoveById } from '../../hooks/useRemoveById';
import { ITodo } from '../../types/todos.type';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as Styled from './todoList.styled';

interface ILocation {
  state: { pathname: string; search: string; hash: string; state: undefined };
}

interface IProps {
  filter: string;
  filterByPrivate: boolean;
  filterByPublic: boolean;
  filterByCompleted: boolean;
  filterByAll: boolean;
}

// Settings for slider
const settings = {
  dots: true,
  centerMode: true,
  centerPadding: '70px',
  slidesToShow: 3,
  speed: 500,
  dotsClass: 'colavo-carousel-dots',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: '50px'
      }
    }
  ]
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TodoList = ({
  filter,
  filterByPrivate,
  filterByPublic,
  filterByCompleted,
  filterByAll
}: IProps) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  // const allTodosQuery = useGetAllTodos(filter);
  const allTodosQuery = useGetAllTodos();

  useEffect(() => {
    if (allTodosQuery.data) {
      setTodos(allTodosQuery.data.data);
    }
  }, [allTodosQuery]);
  // eslint-disable-next-line no-console

  const location: ILocation = useLocation();

  const removeByIdMutation = useRemoveById();

  const normalizedFilter = filter.toLowerCase();
  let filteredTodos = todos.filter((todo) => todo.title.toLowerCase().includes(normalizedFilter));

  if (filterByPrivate === true) {
    filteredTodos = todos.filter((todo) => todo.private === true);
  } else if (filterByPublic === true) {
    filteredTodos = todos.filter((todo) => todo.private === false);
  } else if (filterByCompleted === true) {
    filteredTodos = todos.filter((todo) => todo.completed === true);
  } else if (filterByAll === true) {
    filteredTodos = todos.filter((todo) => todo.title.toLowerCase().includes(normalizedFilter));
  }
  // console.log(filteredTodos);

  return (
    <div>
      {allTodosQuery.isLoading && <div>Loading....</div>}
      {/* Mobile List */}
      {/* Desktop List */}
      {!allTodosQuery.isLoading && allTodosQuery?.data && (
        <Styled.List>
          {filteredTodos.map(({ _id, title, todo, private: isPrivate }) => (
            <Styled.Item key={_id}>
              <Styled.Title>{title}</Styled.Title>
              <Styled.Describtion>{todo}</Styled.Describtion>
              <Styled.BtnWrapper>
                <Styled.StyleLink to={{ pathname: `/${_id}`, state: { from: location } }}>
                  Viev
                </Styled.StyleLink>
                <Styled.Button type="button" onClick={() => removeByIdMutation.mutate(_id)}>
                  Delete
                </Styled.Button>
                {isPrivate === true ? (
                  <Styled.PrivateWrapper>
                    <Styled.PrivateToggle />
                  </Styled.PrivateWrapper>
                ) : (
                  <Styled.PublicWrapper>
                    <Styled.PrivateToggle />
                  </Styled.PublicWrapper>
                )}
              </Styled.BtnWrapper>
            </Styled.Item>
          ))}
        </Styled.List>
      )}

      {/* Tablet List */}
      {!allTodosQuery.isLoading && allTodosQuery?.data && (
        <Styled.TabletWrapper>
          <Slider {...settings} arrows={false}>
            {filteredTodos.map(({ _id, title, todo, private: isPrivate }) => (
              <Styled.Item key={_id}>
                <Styled.Title>{title}</Styled.Title>
                <Styled.Describtion>{todo}</Styled.Describtion>
                <Styled.BtnWrapper>
                  <Styled.StyleLink to={{ pathname: `/${_id}`, state: { from: location } }}>
                    Viev
                  </Styled.StyleLink>
                  <Styled.Button type="button" onClick={() => removeByIdMutation.mutate(_id)}>
                    Delete
                  </Styled.Button>
                  {isPrivate === true ? (
                    <Styled.PrivateWrapper>
                      <Styled.PrivateToggle />
                    </Styled.PrivateWrapper>
                  ) : (
                    <Styled.PublicWrapper>
                      <Styled.PrivateToggle />
                    </Styled.PublicWrapper>
                  )}
                </Styled.BtnWrapper>
              </Styled.Item>
            ))}
          </Slider>
        </Styled.TabletWrapper>
      )}
      {allTodosQuery.error && <div>Something went wrong</div>}
    </div>
  );
};

export default TodoList;
