import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from './store';
import { authActions } from './store/auth-slice';
import Auth from './components/Auth/Auth';
import Layout from './components/UI/Layout';
import UserInfo from './components/User/UserInfo';

import classes from './App.module.css';
import FriendsList from './components/Friends/FriendsList';

const App = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authActions.verifyAuth());
  }, [dispatch]);

  return (
    <div className={classes.app}>
      {isAuthenticated ? (
        <Layout>
          <div className={classes['left-side']}>
            <UserInfo />
            <FriendsList />
          </div>
          <div className={classes['right-side']}>Yo</div>
        </Layout>
      ) : (
        <Auth />
      )}
    </div>
  );
};

export default App;
