import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {PaymentStepsProps, Step as IStep} from './paymentSteps.interface';
import Step from './paymentSteps.fragments/Step';
import {paymentSteps} from './paymentSteps.datasource';
import {colors} from '../../themes';

const PaymentSteps = ({activeStep}: PaymentStepsProps) => {
  const renderItem = ({item, index}: {item: IStep; index: number}) => {
    return (
      <Step
        step={item.step}
        lable={item.lable}
        key={`${item.lable}-${index}`}
        isActive={activeStep === item.step}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={paymentSteps}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.lable}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        style={{paddingStart: Dimensions.get('window').width / 4}}
      />
    </View>
  );
};

export default PaymentSteps;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.grey,
  },
});
