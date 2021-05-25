import { useState } from 'react';
import classes from './Auth.module.css';
import AuthForm from './AuthForm';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchLoginHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const handleKeyDownSwitchLogin = () => {
    switchLoginHandler();
  };

  return (
    <div className={classes.auth}>
      <div className={classes['auth-container']}>
        <div className={classes['left-side']}>
          <h1>Welcome!</h1>
        </div>
        <div className={classes['right-side']}>
          <AuthForm isLogin={isLogin} />
          <span className={classes['switch-is-login']}>
            {isLogin ? 'New here? ' : 'Already a user? '}
            <span
              className={classes.action}
              onClick={switchLoginHandler}
              onKeyDown={handleKeyDownSwitchLogin}
              role="button"
              tabIndex={0}
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Auth;
