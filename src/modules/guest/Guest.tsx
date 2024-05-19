import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../themes';
import GuestForm from './guest.fragments/GuestForm';
import {useGuestForm} from './guest.form';
import {aGuestList} from '../../components/guestIdentity/guestIdentity.model';
import {useRecoilState} from 'recoil';
import {useFieldArray} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/navigation.interface';

const Guest = () => {
  const {goBack} = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [guestList, setGuestList] = useRecoilState(aGuestList);
  const {control, errors, handleSubmit, getValues} = useGuestForm({
    guests: guestList,
  });

  const {fields, append, remove} = useFieldArray({
    control,
    name: 'guests',
  });

  const handleAddGuest = () => {
    append({
      name: '',
      email: '',
      phoneNumber: '',
      title: 'Tn',
    });
  };

  const handleSaveGuest = () => {
    const value = getValues();
    if (value.guests) {
      setGuestList(value.guests);
      goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.labelFont}>Data Tamu</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {fields.map((item, index) => {
          return (
            <GuestForm
              key={`${item.id}-${index}`}
              control={control}
              remove={remove}
              error={errors}
              index={index}
            />
          );
        })}
        <View style={styles.addContainer}>
          <TouchableOpacity onPress={handleAddGuest}>
            <Text style={styles.addFont}>+ Tambah Data Tamu</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divender} />
      </ScrollView>
      <View>
        <Button
          title="Simpan"
          color={colors.orange}
          onPress={handleSubmit(handleSaveGuest)}
        />
      </View>
    </View>
  );
};

export default Guest;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: '100%',
  },
  labelFont: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  addFont: {
    color: colors.orange,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  addContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  divender: {
    height: 100,
  },
});
