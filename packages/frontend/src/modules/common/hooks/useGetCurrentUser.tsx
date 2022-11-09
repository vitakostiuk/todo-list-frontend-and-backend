import { useQuery } from 'react-query';
import UserService from '../../services/user.service';
import { APP_KEYS } from '../consts';
// import { ITodo } from '../types/todos.type';

export const useGetCurrentUser = () => {
  const query = useQuery(APP_KEYS.QUERY_KEYS.USER, () => UserService.current(), {
    onError: (error: any) => {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  });

  return query;
};
