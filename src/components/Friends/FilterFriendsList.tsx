import { useCallback, useState } from 'react';

import useDebounce from '../../hooks/debounce';
import { useAppDispatch } from '../../store';
import { friendsListActions } from '../../store/friends-list-slice';

import classes from './FilterFriendsList.module.css';

export const FilterFriendsList = () => {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState('');

  useDebounce(
    () => {
      dispatch(friendsListActions.filterByName(filter));
    },
    500,
    [filter, dispatch],
  );

  const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.currentTarget.value);
  }, []);

  return (
    <input type="text" onChange={onChangeHandler} value={filter} className={classes.input} placeholder="Search..." />
  );
};

export default FilterFriendsList;
