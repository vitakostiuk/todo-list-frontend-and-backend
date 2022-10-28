import { useMutation, useQueryClient } from 'react-query';
import UserService from '../../services/user.service';
import { IUser } from '../types/user.types';
import { APP_KEYS } from '../consts';

export const useLogin = () => {
  const client = useQueryClient();

  const mutate = useMutation((credentials: IUser) => UserService.login(credentials), {
    onSuccess: () => {
      // eslint-disable-next-line no-alert
      alert('Login was successful. Enter your account!');
    },
    onError: (error: any) => {
      // eslint-disable-next-line no-alert
      alert(error.message);
    },
    onSettled() {
      client.invalidateQueries(APP_KEYS.QUERY_KEYS.USER);
    }
  });

  return mutate;
};
