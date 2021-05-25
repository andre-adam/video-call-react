import React, { useState, useCallback, useRef } from 'react';

import { changeUserMessage } from '../../action-creators/user';

import { useAppDispatch, useAppSelector } from '../../store';

import classes from './UserDescription.module.css';

const UserDescription = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [cancelBlur, setCancelBlur] = useState(false);
  const currentMessage = useAppSelector((state) => state.user.userMessage);
  const [inputDescription, setInputDescription] = useState(currentMessage);

  const inputChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setInputDescription(event.currentTarget.value),
    [],
  );

  const inputBlurHandler = useCallback(() => {
    if (cancelBlur) {
      setCancelBlur(false);
    } else {
      dispatch(changeUserMessage(inputDescription));
    }
  }, [cancelBlur, dispatch, inputDescription]);

  const inputEnterHandler = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.code === 'Enter') {
        inputRef.current?.blur();
      }
      if (event.code === 'Escape') {
        setInputDescription(currentMessage);
        setCancelBlur(true);
        inputRef.current?.blur();
      }
    },
    [currentMessage],
  );

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Write something!"
      className={classes['input-description']}
      onChange={inputChangeHandler}
      onBlur={inputBlurHandler}
      onKeyDown={inputEnterHandler}
      value={inputDescription}
    />
  );
};

export default UserDescription;
