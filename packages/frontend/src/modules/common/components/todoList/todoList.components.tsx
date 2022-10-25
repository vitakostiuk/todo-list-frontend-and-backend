import React from 'react';
import Slider from 'react-slick';
import { useLocation } from 'react-router-dom';
import { useGetAllTodos } from '../../hooks/useGetAllTodos';
import { useRemoveById } from '../../hooks/useRemoveById';
import { useUpdatePrivate } from '../../hooks/useUpdatePrivate';
import { IStatusPrivate } from '../../types/todos.type';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as Styled from './todoList.styled';

interface ILocation {
  state: { pathname: string; search: string; hash: string; state: undefined };
}

interface IProps {
  filter: string;
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
const TodoList = ({ filter }: IProps) => {
  const allTodosQuery = useGetAllTodos();

  const location: ILocation = useLocation();

  const removeByIdMutation = useRemoveById();

  const updatePrivateMutation = useUpdatePrivate();
  // console.log('updatePrivateMutation', updatePrivateMutation);

  const normalizedFilter = filter.toLowerCase();
  const filteredTodos = allTodosQuery?.data?.data.filter((todo) =>
    todo.title.toLowerCase().includes(normalizedFilter)
  );
  // console.log('filteredTodos', filteredTodos);

  const onClickPrivateToggle = (id: string, privateStatus: IStatusPrivate) => {
    const updatedPrivateStatus = {
      data: {
        private: privateStatus.private
      },
      id
    };

    updatePrivateMutation.mutate(updatedPrivateStatus);
  };
  return (
    <div>
      {allTodosQuery.isLoading && <div>Loading....</div>}
      {/* Mobile List and Desktop List */}
      {!allTodosQuery.isLoading && filteredTodos && (
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
                  <Styled.PrivateWrapper
                    onClick={() => onClickPrivateToggle(_id, { private: false })}
                  >
                    <Styled.PrivateToggle />
                  </Styled.PrivateWrapper>
                ) : (
                  <Styled.PublicWrapper
                    onClick={() => onClickPrivateToggle(_id, { private: true })}
                  >
                    <Styled.PrivateToggle />
                  </Styled.PublicWrapper>
                )}
              </Styled.BtnWrapper>
            </Styled.Item>
          ))}
        </Styled.List>
      )}

      {/* Tablet List */}
      {!allTodosQuery.isLoading && filteredTodos && (
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
                    <Styled.PrivateWrapper
                      onClick={() => onClickPrivateToggle(_id, { private: false })}
                    >
                      <Styled.PrivateToggle />
                    </Styled.PrivateWrapper>
                  ) : (
                    <Styled.PublicWrapper
                      onClick={() => onClickPrivateToggle(_id, { private: true })}
                    >
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
