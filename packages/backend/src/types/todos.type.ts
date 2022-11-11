// TODO: Put a real interfaces here

export interface ITodo {
  title: string;
  todo: string;
  private: boolean;
  completed: boolean;
  owner?: string;
  page?: string;
  limit?: string;
}

export interface IError {
  status?: number;
  message?: string;
}
