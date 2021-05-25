import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import authSlice from './auth-slice';
import userSlice from './user-slice';
import friendsListSlice from './friends-list-slice';

const store = configureStore({
  reducer: { auth: authSlice.reducer, user: userSlice.reducer, friends: friendsListSlice.reducer },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
