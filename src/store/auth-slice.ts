import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthSlice } from '../interfaces/auth';
import { AuthToken } from '../models/AuthToken';

const initialState: IAuthSlice = {
  isAuth: !!AuthToken.get(),
  token: AuthToken.get(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, { payload: token }: PayloadAction<string>) {
      state.isAuth = true;
      state.token = token;
      AuthToken.set(token);
    },
    logout(state) {
      state.isAuth = false;
      state.token = '';
      AuthToken.clear();
    },
    verifyAuth(state) {
      state.isAuth = !!AuthToken.get();
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
