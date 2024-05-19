import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../themes';
import {Guest} from './guestIdentity.interface';

const GuestIdentity = ({name, email, phoneNumber, title}: Guest) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.guestNameFont}>{`${title}. ${name}`}</Text>
        <Text style={styles.cummonFont}>{email}</Text>
        <Text style={styles.cummonFont}>{phoneNumber}</Text>
      </View>
      <Pressable>
        <Text style={styles.changeFont}>Ubah</Text>
      </Pressable>
    </View>
  );
};

export default GuestIdentity;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  guestNameFont: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cummonFont: {
    color: colors.grey797979,
    fontSize: 14,
    marginTop: 2,
  },
  changeFont: {
    color: colors.blue,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
