import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {PaymentSteps} from '../../components';
import OrderDetail from './paymentDetails.fragments/OrderDetail';
import {aChosenHotel, getChosenHotelTask} from './paymentDetails.model';
import {useRecoilState} from 'recoil';
import {colors} from '../../themes';

const PaymentDetails = () => {
  const [chosenHotel, setChosenHotel] = useRecoilState(aChosenHotel);

  React.useEffect(() => {
    getChosenHotelTask().then(res => {
      setChosenHotel(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!chosenHotel) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.blue} />
      </View>
    );
  }

  return (
    <View>
      <PaymentSteps activeStep={1} />
      <OrderDetail item={chosenHotel.chosen_hotel.data.get_chosen_hotel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
});

export default PaymentDetails;
