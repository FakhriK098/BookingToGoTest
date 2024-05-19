import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRecoilValue} from 'recoil';
import {aOrderForSelected} from '../../modules/paymentDetails/paymentDetails.model';
import {orderForList} from '../../modules/paymentDetails/paymentDetails.datasource';
import {colors} from '../../themes';
import GuestItem from './guestList.fragments/GuestItem';
import {aGuestList} from '../guestIdentity/guestIdentity.model';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/navigation.interface';

const GuestList = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const oderForSelected = useRecoilValue(aOrderForSelected);
  const guestList = useRecoilValue(aGuestList);

  if (oderForSelected === orderForList[1].id) {
    return (
      <View style={styles.container}>
        <Text style={styles.labelFont}>Data Tamu</Text>
        {guestList.map((item, index) => {
          return <GuestItem {...item} key={`${item.name}-${index}`} />;
        })}
        <Pressable
          style={styles.pressContainer}
          onPress={() => navigate('Guest')}>
          <Text style={styles.changeFont}>Ubah Data Tamu</Text>
        </Pressable>
      </View>
    );
  }

  return <></>;
};

export default GuestList;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  labelFont: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  pressContainer: {
    alignItems: 'flex-end',
  },
  changeFont: {
    color: colors.blue,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
