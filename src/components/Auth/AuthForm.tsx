/* eslint-disable react/jsx-props-no-spreading */
import { useRef } from 'react';

import classes from './AuthForm.module.css';

import { authActions } from '../../store/auth-slice';
import { useAppDispatch } from '../../store';

import Button from '../UI/Button';
import useInput from '../../hooks/input';
import Input from '../UI/Input';
import { isEmail, isMaxLength, isMinLength, isNotEmpty } from '../../utils/inputs-validators';

const AuthForm: React.FC<{ isLogin: boolean }> = (props) => {
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement>(null);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const isFormValid = emailControl.isValid && passwordControl.isValid;
    // const email = emailControl.value;
    // const password = passwordControl.value;

    if (isFormValid) {
      dispatch(authActions.login('token'));
    }
  };

  const emailControl = useInput({
    title: 'E-mail',
    type: 'email',
    validators: [isNotEmpty, isEmail],
    onKeyDownEnter: () => formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true })),
  });
  const passwordControl = useInput({
    title: 'Password',
    type: 'password',
    validators: [isNotEmpty, isMinLength(6), isMaxLength(50)],
    onKeyDownEnter: () => formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true })),
  });

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <div className={classes.control}>
        <Input {...emailControl} />
      </div>
      <div className={classes.control}>
        <Input {...passwordControl} />
      </div>
      <div>
        <Button type="submit">{props.isLogin ? 'Login' : 'Sign Up'}</Button>
      </div>
    </form>
  );
};

export default AuthForm;
