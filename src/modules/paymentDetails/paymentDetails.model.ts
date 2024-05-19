import {atom} from 'recoil';
import {getChosenHotel, orderForList} from './paymentDetails.datasource';
import {ChosenHotelData} from './paymentDetails.interface';

export const aOrderForSelected = atom<string>({
  key: 'aOrderForSelected',
  default: orderForList[0].id,
});

export const aChosenHotel = atom<ChosenHotelData | null>({
  key: 'aChosenHotel',
  default: null,
});

export const getChosenHotelTask = async () => {
  const response = await getChosenHotel();
  return response;
};
