import { AppDispatch } from '../store';
import { userActions } from '../store/user-slice';

export const changeUserMessage = (description: string) => {
  return async (dispatch: AppDispatch) => {
    // send to API
    dispatch(userActions.changeUserMessage(description));
  };
};
