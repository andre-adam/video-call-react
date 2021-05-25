import { useCallback } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch } from '../../store';

import classes from './UserInfoActions.module.css';
import { authActions } from '../../store/auth-slice';

const UserInfoActions = () => {
  const dispatch = useAppDispatch();

  // const profileHandler = () => {

  // };

  // const settingsHandler = () => {

  // };

  const logoutHandler = useCallback(() => dispatch(authActions.logout()), [dispatch]);

  return (
    <Dropdown className={classes.options}>
      <Dropdown.Toggle id="dropdown-options">
        <FontAwesomeIcon icon={faEllipsisV} className={classes.options} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
        <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserInfoActions;
