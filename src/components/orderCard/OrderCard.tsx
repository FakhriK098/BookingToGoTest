import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {OrderCardProps} from './orderCard.interface';
import {colors} from '../../themes';

const OrderCard = ({
  photo,
  hotelName,
  roomName,
  countRoom,
  countGuest,
  countNight,
  meal,
}: OrderCardProps) => {
  const roomType = React.useMemo(() => {
    let room = roomName;

    if (meal) {
      room = `${roomName} with ${meal}`;
    }

    return room;
  }, [roomName, meal]);

  return (
    <View style={styles.container}>
      <Image source={{uri: photo}} style={styles.photo} />
      <View style={styles.content}>
        <Text style={styles.hotelName}>{hotelName}</Text>
        <Text style={styles.text}>{roomType}</Text>
        <Text
          style={
            styles.text
          }>{`${countRoom} Kamar • ${countGuest} Tamu • ${countNight} Malam`}</Text>
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
    marginTop: 16,
  },
  photo: {
    width: 80,
    height: 80,
    backgroundColor: colors.grey,
    borderRadius: 8,
  },
  content: {
    marginStart: 12,
  },
  hotelName: {
    fontSize: 14,
    color: colors.blue,
  },
  text: {
    fontSize: 12,
    color: colors.grey797979,
    marginTop: 4,
  },
});
