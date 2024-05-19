import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DataContentProps} from './dataContent.interface';
import {colors} from '../../themes';

const DataContent = ({label, value}: DataContentProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelFont}>{label}</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default DataContent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  labelFont: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  valueFont: {
    color: colors.grey797979,
    fontSize: 16,
  },
});
