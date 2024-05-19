import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, images} from '../../../themes';
import {Guest, Titles} from '../../guestIdentity/guestIdentity.interface';

const GuestItem = ({name, title}: Guest) => {
  return (
    <View style={styles.container}>
      <Image
        source={
          title === Titles.Mr ? images.iconUserMale : images.iconUserFemale
        }
        style={styles.icon}
      />
      <Text>{`${title}. ${name}`}</Text>
    </View>
  );
};

export default GuestItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginEnd: 12,
  },
});
