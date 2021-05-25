import { IFriend } from '../../interfaces/friends-list';

import classes from './Friend.module.css';

const FriendItem: React.FC<IFriend> = (props) => {
  const { isOnline, userMessage, userName, imgSrc } = props;
  return (
    <div className={classes.container}>
      <div className={`${classes['friend-icon']} ${classes[isOnline ? 'online' : 'offline']}`}>
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={`Avatar for user ${userName}`}
            className={`${classes.img} ${isOnline ? 'online' : 'offline'}`}
          />
        ) : (
          <span className={classes['first-letter']}>{userName.slice(0, 1).toUpperCase()}</span>
        )}
      </div>
      <div className={classes.text}>
        <span className={classes['friend-name']}>{userName}</span>
        <span className={classes['friend-message']}>{userMessage}</span>
      </div>
    </div>
  );
};

export default FriendItem;
