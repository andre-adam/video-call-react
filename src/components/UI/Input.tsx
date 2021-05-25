import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { IInputValid } from '../../interfaces/Input';

import classes from './Input.module.css';

const Input: React.FC<IInputValid> = (props) => {
  const showInvalidStyle = !props.isValid && props.isTouched;
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code.includes('Enter') && props.onKeyDownEnter) {
      props.onKeyDownEnter();
    }
  };

  return (
    <div className={classes.control}>
      <label htmlFor={props.title} className={classes.label}>
        <span className={classes.text}>{props.title}</span>
        <input
          type={props.type}
          className={`${classes.input} ${showInvalidStyle ? classes.invalid : ''}`}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
          onKeyDown={handleKeyDown}
        />
      </label>
      <TransitionGroup component="ul" className={classes['error-notification']}>
        {props.errorMessages?.map((message) => (
          <CSSTransition
            key={`message-${message.slice(0, 5)}`}
            classNames={{
              enter: classes['fade-enter'],
              enterActive: classes['fade-enter-active'],
              exit: classes['fade-exit'],
              exitActive: classes['fade-exit-active'],
            }}
            timeout={300}
          >
            <li className={classes['invalid-text']}>{message}</li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default Input;
