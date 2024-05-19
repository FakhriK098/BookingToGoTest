import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StepProps} from '../paymentSteps.interface';
import {colors} from '../../../themes';

const Step = ({step, lable, isActive}: StepProps) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.stepContainer,
          {backgroundColor: isActive ? colors.blue : colors.grey},
        ]}>
        <Text style={styles.stepFont}>{step}</Text>
      </View>
      <Text
        style={[
          styles.lableFont,
          {color: isActive ? colors.black : colors.grey},
        ]}>
        {lable}
      </Text>
      <View style={styles.dash} />
    </View>
  );
};

export default Step;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepContainer: {
    borderRadius: 25,
    width: 35,
    height: 35,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 12,
  },
  stepFont: {
    color: colors.white,
    fontSize: 14,
  },
  lableFont: {
    fontSize: 16,
    marginEnd: 12,
  },
  dash: {
    width: 15,
    height: 3,
    backgroundColor: colors.blue,
    marginEnd: 12,
  },
});
