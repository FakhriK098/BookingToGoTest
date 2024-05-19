import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DataContent,
  GuestIdentity,
  GuestList,
  OrderCard,
  RadioButton,
  Refund,
} from '../../../components';
import {calculateDays, formatDateString} from '../utils';
import {colors} from '../../../themes';
import {personalGuest} from '../../../components/guestIdentity/guestIdentity.datasource';
import {useRecoilState} from 'recoil';
import {aOrderForSelected} from '../paymentDetails.model';
import {orderForList} from '../paymentDetails.datasource';
import {GetChosenHotel} from '../paymentDetails.interface';

const OrderDetail = ({item}: {item: GetChosenHotel}) => {
  const [orderForSelected, setOrderSelected] =
    useRecoilState(aOrderForSelected);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.labelFont}>Detail Pesanan</Text>
          <OrderCard
            photo={item.chosen_hotel_detail.images[0].url}
            hotelName={item.chosen_hotel_detail.hotel_name}
            roomName={item.chosen_hotel_room.room_name}
            meal={item.chosen_hotel_room.meal}
            countRoom={item.chosen_hotel_params.total_room}
            countGuest={item.chosen_hotel_params.guest_adult}
            countNight={calculateDays(
              item.chosen_hotel_params.check_in,
              item.chosen_hotel_params.check_out,
            )}
          />
          <DataContent
            label="Check-In"
            value={formatDateString(
              item.chosen_hotel_params.check_in,
              'DD MMMM YYYY',
            )}
          />
          <DataContent
            label="Check-Out"
            value={formatDateString(
              item.chosen_hotel_params.check_out,
              'DD MMMM YYYY',
            )}
          />
          <Refund isRefundable={item.chosen_hotel_prices.is_refundable} />
        </View>
        <View style={styles.devinder} />
        <View style={styles.container}>
          <Text style={styles.labelFont}>Detail Pemesanan</Text>
          <GuestIdentity {...personalGuest} />
          <View style={styles.orderForCointainer}>
            {orderForList.map((x, index) => {
              return (
                <RadioButton
                  key={`${x.id}-${index}`}
                  id={x.id}
                  label={x.label}
                  isActive={x.id === orderForSelected}
                  setOnPress={val => setOrderSelected(val)}
                />
              );
            })}
          </View>
          <GuestList />
        </View>
        <View style={styles.devinder} />
      </View>
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  labelFont: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconRefund: {
    width: 24,
    height: 24,
  },
  refundContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 16,
  },
  devinder: {
    borderBottomWidth: 1,
    borderColor: colors.grey,
  },
  orderForCointainer: {
    marginTop: 16,
  },
  mainContainer: {
    paddingBottom: 150,
  },
});
