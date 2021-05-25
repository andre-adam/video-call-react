import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { friendsListActions } from '../../store/friends-list-slice';
import FriendItem from './Friend';
import FriendsListSortedMenu from './FriendsListSortedByMenu';
import FilterFriendsList from './FilterFriendsList';

import classes from './FriendsList.module.css';

const FriendsList = () => {
  const dispatch = useAppDispatch();
  const { sortedAndFilteredFriends: friendsList } = useAppSelector((state) => state.friends);

  useEffect(() => {
    dispatch(friendsListActions.filterByName(''));
  }, [dispatch]);

  const friends = friendsList.map((friend) => <FriendItem key={friend.id} {...friend} />);

  return (
    <div className={classes.container}>
      <div className={classes.toolbar}>
        <FilterFriendsList />
        <FriendsListSortedMenu />
      </div>
      <div className={classes.list}>{friends}</div>
    </div>
  );
};

export default FriendsList;
