import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {DropDown} from '../../../components';
import {colors, images} from '../../../themes';
import {GuestFormProps} from '../guest.interface';
import {Controller} from 'react-hook-form';

const GuestForm = ({control, remove, error, index}: GuestFormProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Controller
          name={`guests.${index}.title`}
          control={control}
          rules={{required: true}}
          render={({field: {value, onChange}}) => (
            <DropDown
              label={value}
              data={['Tn', 'Ny']}
              onSelect={val => onChange(val)}
            />
          )}
        />
        <Controller
          name={`guests.${index}.name`}
          control={control}
          rules={{required: true}}
          render={({field: {value, onChange}}) => (
            <TextInput
              placeholder="Nama"
              value={value}
              onChangeText={onChange}
              style={[
                styles.textInput,
                {
                  borderColor: error?.guests?.[index]?.name
                    ? colors.red
                    : colors.grey,
                },
              ]}
            />
          )}
        />
      </View>
      <TouchableOpacity onPress={() => remove(index)}>
        <Image source={images.iconTrash} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default GuestForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginStart: 12,
    width: '70%',
  },
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
});
