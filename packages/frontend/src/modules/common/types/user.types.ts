export interface IUser {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  user: {
    email: string;
    _id: string;
  };
}
