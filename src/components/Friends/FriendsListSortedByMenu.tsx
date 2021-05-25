import { useCallback } from 'react';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAlphaDown, faSortAlphaDownAlt, faSortAmountDown } from '@fortawesome/free-solid-svg-icons';

import classes from './FriendsListSortedByMenu.module.css';
import { useAppDispatch, useAppSelector } from '../../store';
import { FriendsListSortedBy } from '../../enums/friends-list';
import { friendsListActions } from '../../store/friends-list-slice';

const FriendsListSortedMenu = () => {
  const dispatch = useAppDispatch();
  const sortedBy = useAppSelector((state) => state.friends.sortedBy);

  let icon;

  switch (sortedBy) {
    case FriendsListSortedBy.ASC:
      icon = faSortAlphaDown;
      break;
    case FriendsListSortedBy.DESC:
      icon = faSortAlphaDownAlt;
      break;
    case FriendsListSortedBy.IS_ONLINE:
      icon = faSortAmountDown;
      break;
    default:
      icon = faSortAlphaDown;
      break;
  }

  const changeSortedByHandler = useCallback(
    (sortBy: FriendsListSortedBy) => {
      dispatch(friendsListActions.changeSortedBy(sortBy));
    },
    [dispatch],
  );

  return (
    <Dropdown className={classes.options}>
      <Dropdown.Toggle id="dropdown-options-friends-list">
        <FontAwesomeIcon icon={icon} className={classes.options} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => changeSortedByHandler(FriendsListSortedBy.ASC)}
          disabled={sortedBy === FriendsListSortedBy.ASC}
        >
          Asc
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => changeSortedByHandler(FriendsListSortedBy.DESC)}
          disabled={sortedBy === FriendsListSortedBy.DESC}
        >
          Desc
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => changeSortedByHandler(FriendsListSortedBy.IS_ONLINE)}
          disabled={sortedBy === FriendsListSortedBy.IS_ONLINE}
        >
          Status
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FriendsListSortedMenu;
