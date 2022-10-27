import { useMutation, useQueryClient } from 'react-query';
import UserService from '../../services/user.service';
import { APP_KEYS } from '../consts';

export const useLogout = () => {
  const client = useQueryClient();

  const query = useMutation(APP_KEYS.QUERY_KEYS.TODOS, () => UserService.logout(), {
    onSettled() {
      client.invalidateQueries(APP_KEYS.QUERY_KEYS.USER);
    }
  });

  return query;
};
