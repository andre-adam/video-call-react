import { useAppSelector } from '../../store';
import UserDescription from './UserDescription';
import UserIcon from './UserIcon';
import UserInfoActions from './UserInfoActions';

import classes from './UserInfo.module.css';

const UserInfo: React.FC = () => {
  const { userName } = useAppSelector((state) => state.user);

  return (
    <div className={classes['user-info']}>
      <UserIcon />
      <div className={classes['container-text']}>
        <div className={classes.username}>{userName}</div>
        <hr />
        <UserDescription />
      </div>
      <UserInfoActions />
    </div>
  );
};

export default UserInfo;
