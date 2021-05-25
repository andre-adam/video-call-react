import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUserSlice } from '../interfaces/user';

const initialState: IUserSlice = {
  id: 'abc',
  userName: 'Bob Esponja',
  userMessage: 'Hello World!',
  imgUrl:
    'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png',
  isOnline: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    init(state, action: PayloadAction<IUserSlice>) {
      state = action.payload;
    },
    isOnline(state, action: PayloadAction<boolean>) {
      state.isOnline = action.payload;
    },
    changeUserMessage(state, action: PayloadAction<string>) {
      state.userMessage = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
