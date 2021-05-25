import { IInputValidator } from '../interfaces/Input';

export const isEmail: IInputValidator = (value: string) => ({
  message: 'Not a valid e-mail',
  isValid: value.includes('@'),
});

export const isEmpty: IInputValidator = (value: string) => ({
  message: 'Value must be empty',
  isValid: !value.trim().length,
});

export const isNotEmpty: IInputValidator = (value: string) => ({
  message: 'Value must not be empty',
  isValid: !!value.trim().length,
});

export const isMinLength =
  (length: number): IInputValidator =>
  (value: string) => ({
    message: `Must be at least ${length} long`,
    isValid: value.trim().length >= length,
  });

export const isMaxLength =
  (length: number): IInputValidator =>
  (value: string) => ({
    message: `Must be less than ${length} long`,
    isValid: value.trim().length <= length,
  });
