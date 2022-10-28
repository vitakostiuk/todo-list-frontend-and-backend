import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import UserService from '../../services/user.service';
import { IUser } from '../types/user.types';

export const useRegister = () => {
  // const client = useQueryClient();
  const history = useHistory();

  const mutate = useMutation((credentials: IUser) => UserService.register(credentials), {
    onSuccess: () => {
      // eslint-disable-next-line no-alert
      alert('Registration was successful. Log in to enter your account!');
      history.push('/login');
    },
    onError: (error: any) => {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
  });

  return mutate;
};