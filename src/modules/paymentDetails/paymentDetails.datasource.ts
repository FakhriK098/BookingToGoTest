import instance from '../../utils/instance';
import {ChosenHotelResponse, OrderFor} from './paymentDetails.interface';

export const orderForList: OrderFor[] = [
  {
    id: 'for-my-self',
    label: 'Saya memesan untuk sendiri',
  },
  {
    id: 'for-others',
    label: 'Saya memesan untuk orang lain',
  },
];

export const getChosenHotel = async () => {
  try {
    const response = await instance.get<ChosenHotelResponse>(
      '/classes/hotel/bVonXoSUHK',
    );

    return response.data;
  } catch (e) {
    console.log('WWKKWKW eroor', e);
    return null;
  }
};
