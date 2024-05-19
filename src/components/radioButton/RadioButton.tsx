import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RadioButtonProps} from './radioButton.interface';
import {colors, images} from '../../themes';

const RadioButton = ({id, label, isActive, setOnPress}: RadioButtonProps) => {
  return (
    <Pressable onPress={() => setOnPress(id)}>
      <View style={styles.container}>
        <Image
          source={isActive ? images.iconRadioOn : images.iconRadioOff}
          style={styles.icon}
        />
        <Text style={styles.label}>{label}</Text>
      </View>
    </Pressable>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginEnd: 8,
  },
  label: {
    color: colors.black,
    fontSize: 14,
  },
});
