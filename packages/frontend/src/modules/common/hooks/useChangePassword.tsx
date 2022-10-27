import { useMutation, useQueryClient } from 'react-query';
import UserService from '../../services/user.service';
import { IUser } from '../types/user.types';
import { APP_KEYS } from '../consts';

export const useChangePassword = () => {
  const client = useQueryClient();

  const mutate = useMutation((credentials: IUser) => UserService.changePassword(credentials), {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSettled(...params) {
      client.invalidateQueries(APP_KEYS.QUERY_KEYS.TODOS);
    }
  });

  return mutate;
};
