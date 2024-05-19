import {atom} from 'recoil';
import {Guest} from './guestIdentity.interface';
import {guestList} from './guestIdentity.datasource';

export const aGuestList = atom<Guest[]>({
  key: 'aGuestList',
  default: guestList,
});
