import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import UserService from '../../services/user.service';
import { APP_KEYS } from '../consts';

export const useLogout = () => {
  const client = useQueryClient();

  const query = useMutation(APP_KEYS.QUERY_KEYS.TODOS, () => UserService.logout(), {
    onError: (error: any) => {
      toast.error('You are not authorized. Please log in or register.');
      // eslint-disable-next-line no-console
      console.log(error.message);
    },
    onSettled() {
      client.invalidateQueries(APP_KEYS.QUERY_KEYS.USER);
    }
  });

  return query;
};
