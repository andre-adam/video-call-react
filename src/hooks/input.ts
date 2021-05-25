/* eslint-disable @typescript-eslint/no-empty-function */
import { useCallback, useReducer } from 'react';

import { InputActionType } from '../enums/input';
import { IInputValid, IInputAction, IInputValidator, IInputValidate } from '../interfaces/Input';

const initialState: IInputValid = {
  title: '',
  type: 'text',
  value: '',
  isValid: false,
  isTouched: false,
  errorMessages: [],
  validators: [],
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => {},
  onBlur: () => {},
  onFocus: () => {},
};

const validateValue = (value: unknown, validators: IInputValidator[]): IInputValidate =>
  validators
    .map((validator) => validator(value))
    // eslint-disable-next-line no-return-assign
    .reduce(
      (a, b) => {
        return {
          isValid: a.isValid ? b.isValid : false,
          messages: a.messages.concat(!b.isValid ? b.message : []),
        };
      },
      {
        messages: [],
        isValid: true,
      } as IInputValidate,
    );

const inputReducer = (state: IInputValid, action: IInputAction): IInputValid => {
  switch (action.type) {
    case InputActionType.CHANGE: {
      let error: IInputValidate = { messages: [], isValid: false };
      if (state.isTouched) {
        error = validateValue(action.payload || state.value, state!.validators!);
      }
      return {
        ...state,
        isValid: error.isValid,
        errorMessages: error.messages,
        value: action.payload!,
      };
    }
    case InputActionType.BLUR: {
      const error = validateValue(action.payload || state.value, state!.validators!);
      return {
        ...state,
        isValid: error.isValid,
        errorMessages: error.messages,
        isTouched: true,
      };
    }
    case InputActionType.FOCUS:
      return {
        ...state,
        isTouched: true,
      };
    default:
      return initialState;
  }
};

const useInput = (initialValue: IInputValid): IInputValid => {
  const [state, dispatch] = useReducer(inputReducer, { ...initialState, ...initialValue });

  const inputChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: InputActionType.CHANGE, payload: event.currentTarget.value });
    },
    [dispatch],
  );

  const inputFocusHandler = useCallback(() => dispatch({ type: InputActionType.FOCUS }), [dispatch]);

  const inputBlurHandler = useCallback(() => dispatch({ type: InputActionType.BLUR }), [dispatch]);

  return {
    ...state,
    onChange: inputChangeHandler,
    onBlur: inputBlurHandler,
    onFocus: inputFocusHandler,
  };
};

export default useInput;
