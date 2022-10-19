// TODO: Put a real interfaces here

export interface ITodo {
  title: string;
  todo: string;
  private: boolean;
}

export interface IError {
  status?: number;
  message?: string;
}
