import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FriendsListSortedBy } from '../enums/friends-list';
import { IFriend, IFriendsSlice } from '../interfaces/friends-list';
import { normalizeString } from '../utils';

const initialState: IFriendsSlice = {
  friends: [
    {
      id: 'f1',
      isOnline: true,
      userName: 'André Adam',
      userMessage: 'Yooo, LETSGO',
      normalizedUserName: normalizeString('André Adam'),
      imgSrc:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'f2',
      isOnline: true,
      userName: 'Juan',
      userMessage: 'Sup bitches',
      normalizedUserName: normalizeString('Juan'),
      imgSrc:
        'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'f3',
      isOnline: false,
      userName: 'José Jàci',
      userMessage: 'Sup hoes',
      normalizedUserName: normalizeString('José Jàci'),
      imgSrc:
        'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'f4',
      isOnline: false,
      userName: 'Jánice Juarez',
      userMessage: 'Hey yall',
      normalizedUserName: normalizeString('Jánice Juarez'),
      imgSrc:
        'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'f5',
      isOnline: true,
      userName: 'Cárlos Santos',
      userMessage: '',
      normalizedUserName: normalizeString('Cárlos Santos'),
      imgSrc:
        'https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'f6',
      isOnline: true,
      userName: 'André Adam',
      userMessage: 'Yooo, LETSGO',
      normalizedUserName: normalizeString('André Adam'),
      imgSrc:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'f7',
      isOnline: true,
      userName: 'André Adam',
      userMessage: 'Yooo, LETSGO',
      normalizedUserName: normalizeString('André Adam'),
      imgSrc:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ],
  sortedAndFilteredFriends: [],
  sortedBy: FriendsListSortedBy.ASC,
  filteredBy: '',
};

const sortFriendsList = (friends: IFriend[], sortedBy: FriendsListSortedBy) => {
  switch (sortedBy) {
    case FriendsListSortedBy.ASC:
      return friends.sort((a, b) => {
        return a.normalizedUserName > b.normalizedUserName ? 1 : -1;
      });
    case FriendsListSortedBy.DESC:
      return friends.sort((a, b) => {
        return a.normalizedUserName < b.normalizedUserName ? 1 : -1;
      });
    case FriendsListSortedBy.IS_ONLINE:
      return friends.sort((a, b) => {
        return a.normalizedUserName > b.normalizedUserName && a.isOnline ? -1 : 1;
      });
    default:
      return [];
  }
};

const filterFriendsList = (friends: IFriend[], filteredBy: string) => {
  const filteredNameNormalized = normalizeString(filteredBy);
  return filteredBy ? friends.filter((friend) => friend.normalizedUserName.includes(filteredNameNormalized)) : friends;
};

const friendsListSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setList(state, action: PayloadAction<IFriend[]>) {
      state.friends = action.payload;
    },
    changeSortedBy(state, action: PayloadAction<FriendsListSortedBy>) {
      state.sortedBy = action.payload;
      state.sortedAndFilteredFriends = sortFriendsList(state.sortedAndFilteredFriends, state.sortedBy);
    },
    filterByName(state, action: PayloadAction<string>) {
      const filteredList = filterFriendsList(state.friends, action.payload);
      state.sortedAndFilteredFriends = sortFriendsList(filteredList, state.sortedBy);
    },
  },
});

export const friendsListActions = friendsListSlice.actions;

export default friendsListSlice;
