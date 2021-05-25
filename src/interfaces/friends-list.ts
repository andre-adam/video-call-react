import { FriendsListSortedBy } from '../enums/friends-list';

export interface IFriend {
  id: string;
  userName: string;
  normalizedUserName: string;
  userMessage: string;
  isOnline: boolean;
  imgSrc: string;
}

export interface IFriendsSlice {
  friends: IFriend[];
  sortedAndFilteredFriends: IFriend[];
  sortedBy: FriendsListSortedBy;
  filteredBy: string;
}
