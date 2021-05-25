import { InputActionType } from '../enums/input';

export interface IInputValidator {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (value: any): { message: string; isValid: boolean };
}

export interface IInputValid {
  title: string;
  validators?: IInputValidator[];
  type?: string;
  value?: string;
  isValid?: boolean;
  isTouched?: boolean;
  errorMessages?: string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onKeyDownEnter?: () => void;
}

export interface IInput {
  type: string;
  classNames: string[];
  onInput: (value: string) => void;
}

export interface IInputAction {
  type: InputActionType;
  payload?: string;
}

export interface IInputValidate {
  messages: string[];
  isValid: boolean;
}
