import React from 'react';
import Slider from 'react-slick';
import { useLocation } from 'react-router-dom';
import { useRemoveById } from '../../hooks/useRemoveById';
import { useGetAllTodos } from '../../hooks/useGetAllTodos';
import { useUpdatePrivate } from '../../hooks/useUpdatePrivate';
import { IStatusPrivate, ITodo } from '../../types/todos.type';
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
  slidesToShow: 1,
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
  const allTodosQuery = useGetAllTodos();

  const location: ILocation = useLocation();

  const removeByIdMutation = useRemoveById();

  const updatePrivateMutation = useUpdatePrivate();
  // console.log('updatePrivateMutation', updatePrivateMutation);

  const normalizedFilter = filter.toLowerCase();
  let filteredTodos: ITodo[] = allTodosQuery?.data?.data.filter((todo: ITodo) =>
    todo.title.toLowerCase().includes(normalizedFilter)
  );

  if (filterByPrivate === true) {
    filteredTodos = allTodosQuery?.data?.data.filter((todo: ITodo) => todo.private === true);
  } else if (filterByPublic === true) {
    filteredTodos = allTodosQuery?.data?.data.filter((todo: ITodo) => todo.private === false);
  } else if (filterByCompleted === true) {
    filteredTodos = allTodosQuery?.data?.data.filter((todo: ITodo) => todo.completed === true);
  } else if (filterByAll === true) {
    filteredTodos = allTodosQuery?.data?.data.filter((todo: ITodo) =>
      todo.title.toLowerCase().includes(normalizedFilter)
    );
  }
  // console.log(filteredTodos);

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

// interface ILocation {
//   state: { pathname: string; search: string; hash: string; state: undefined };
// }

// interface IProps {
//   isLoading: boolean;
//   isError: boolean;
//   todos: {
//     list: ITodo[];
//     count: number;
//   };
// }

// // Settings for slider
// const settings = {
//   dots: true,
//   centerMode: true,
//   centerPadding: '70px',
//   slidesToShow: 3,
//   speed: 500,
//   dotsClass: 'colavo-carousel-dots',
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         centerPadding: '50px'
//       }
//     }
//   ]
// };

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const TodoList = ({ todos, isLoading, isError }: IProps) => {
//   const location: ILocation = useLocation();

//   const removeByIdMutation = useRemoveById();

//   const updatePrivateMutation = useUpdatePrivate();
//   // console.log('updatePrivateMutation', updatePrivateMutation);

//   const onClickPrivateToggle = (id: string, isPrivate: IStatusPrivate) => {
//     const updatedPrivateStatus = {
//       data: {
//         private: isPrivate.private
//       },
//       id
//     };

//     updatePrivateMutation.mutate(updatedPrivateStatus);
//   };
//   return (
//     <div>
//       {isLoading && <div>Loading....</div>}
//       {/* Mobile List and Desktop List */}
//       {!isLoading && todos && (
//         <Styled.List>
//           {todos?.list.map(({ _id, title, todo, private: isPrivate }) => (
//             <Styled.Item key={_id}>
//               <Styled.Title>{title}</Styled.Title>
//               <Styled.Describtion>{todo}</Styled.Describtion>
//               <Styled.BtnWrapper>
//                 <Styled.StyleLink to={{ pathname: '/todo', state: { from: location, id: _id } }}>
//                   Viev
//                 </Styled.StyleLink>
//                 <Styled.Button type="button" onClick={() => removeByIdMutation.mutate(_id)}>
//                   Delete
//                 </Styled.Button>
//                 {isPrivate === true ? (
//                   <Styled.PrivateWrapper
//                     onClick={() => onClickPrivateToggle(_id, { private: false })}
//                   >
//                     <Styled.PrivateToggle />
//                   </Styled.PrivateWrapper>
//                 ) : (
//                   <Styled.PublicWrapper
//                     onClick={() => onClickPrivateToggle(_id, { private: true })}
//                   >
//                     <Styled.PrivateToggle />
//                   </Styled.PublicWrapper>
//                 )}
//               </Styled.BtnWrapper>
//             </Styled.Item>
//           ))}
//         </Styled.List>
//       )}

//       {/* Tablet List */}
//       {!isLoading && todos && (
//         <Styled.TabletWrapper>
//           <Slider {...settings} arrows={false}>
//             {todos?.list.map(({ _id, title, todo, private: isPrivate }) => (
//               <Styled.Item key={_id}>
//                 <Styled.Title>{title}</Styled.Title>
//                 <Styled.Describtion>{todo}</Styled.Describtion>
//                 <Styled.BtnWrapper>
//                   <Styled.StyleLink to={{ pathname: '/todo', state: { from: location } }}>
//                     Viev
//                   </Styled.StyleLink>
//                   <Styled.Button type="button" onClick={() => removeByIdMutation.mutate(_id)}>
//                     Delete
//                   </Styled.Button>
//                   {isPrivate === true ? (
//                     <Styled.PrivateWrapper
//                       onClick={() => onClickPrivateToggle(_id, { private: false })}
//                     >
//                       <Styled.PrivateToggle />
//                     </Styled.PrivateWrapper>
//                   ) : (
//                     <Styled.PublicWrapper
//                       onClick={() => onClickPrivateToggle(_id, { private: true })}
//                     >
//                       <Styled.PrivateToggle />
//                     </Styled.PublicWrapper>
//                   )}
//                 </Styled.BtnWrapper>
//               </Styled.Item>
//             ))}
//           </Slider>
//         </Styled.TabletWrapper>
//       )}
//       {isError && <div>Something went wrong</div>}
//     </div>
//   );
// };

// export default TodoList;
