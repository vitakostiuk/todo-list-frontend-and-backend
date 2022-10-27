import { useQuery } from 'react-query';
import UserService from '../../services/user.service';
import { APP_KEYS } from '../consts';

export const useLogout = () => {
  const query = useQuery(APP_KEYS.QUERY_KEYS.TODOS, () => UserService.logout());

  return query;
};
