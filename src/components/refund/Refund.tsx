import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {RefundProps} from './refund.interface';
import {colors, images} from '../../themes';

const Refund = ({isRefundable}: RefundProps) => {
  if (isRefundable) {
    return (
      <View style={styles.refundContainer}>
        <Image source={images.iconRefund} style={styles.iconRefund} />
        <Text style={styles.font}>Dapat direfund jika dibatalkan</Text>
      </View>
    );
  }

  return <></>;
};

export default Refund;

const styles = StyleSheet.create({
  iconRefund: {
    width: 24,
    height: 24,
    marginEnd: 8,
  },
  refundContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 16,
  },
  font: {
    color: colors.orange,
    fontSize: 16,
  },
});
