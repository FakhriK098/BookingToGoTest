import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParams} from '../navigation.interface';
import PaymentDetails from '../../modules/paymentDetails/PaymentDetails';
import Guest from '../../modules/guest/Guest';
import {colors} from '../../themes';

const RootStack = createNativeStackNavigator<RootStackParams>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="PaymentDetail">
      <RootStack.Screen
        name="PaymentDetail"
        component={PaymentDetails}
        options={{
          title: 'Payment Details',
          headerStyle: {backgroundColor: colors.blue},
          headerTintColor: colors.white,
        }}
      />
      <RootStack.Screen
        name="Guest"
        component={Guest}
        options={{
          title: 'Tambah Data Tamu',
          headerStyle: {backgroundColor: colors.blue},
          headerTintColor: colors.white,
        }}
      />
    </RootStack.Navigator>
  );
};
