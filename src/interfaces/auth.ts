export interface IAuthPayload {
  email: string;
  avatar?: string;
  name?: string;
}

export interface IAuthSlice {
  isAuth: boolean;
  token?: string;
  payload?: IAuthPayload;
}
