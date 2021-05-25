/* eslint-disable react/button-has-type */
import React from 'react';

import classes from './Button.module.css';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button {...props} className={classes.button}>
      {props!.children}
    </button>
  );
};

export default Button;
