import { useMutation } from 'react-query';
import UserService from '../../services/user.service';
import { IUser } from '../types/user.types';
// import { APP_KEYS } from '../consts';

export const useChangePassword = () => {
  const mutate = useMutation((credentials: IUser) => UserService.changePassword(credentials), {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSuccess: () => {
      // eslint-disable-next-line no-alert
      alert('Password was changed');
    },
    onError: (error: any) => {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
  });

  return mutate;
};
