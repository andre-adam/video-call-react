import { useAppSelector } from '../../store';
import classes from './UserIcon.module.css';

const UserIcon: React.FC = () => {
  const { imgUrl, isOnline, userName } = useAppSelector((state) => state.user);

  return (
    <div className={`${classes['user-icon']} ${classes[isOnline ? 'online' : 'away']}`}>
      {imgUrl ? (
        <img className={classes.img} src={imgUrl} alt={`User avatar of ${userName}`} />
      ) : (
        <span className={classes['first-letter']}>{userName.slice(0, 1).toUpperCase()}</span>
      )}
    </div>
  );
};

export default UserIcon;
