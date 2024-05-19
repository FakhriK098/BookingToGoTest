import {useForm} from 'react-hook-form';
import {Guest} from '../../components/guestIdentity/guestIdentity.interface';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

export interface GuestForm {
  guests: Guest[];
}

export const schema = yup.object().shape({
  guests: yup.array().of(
    yup.object({
      name: yup.string().required(),
      email: yup.mixed(),
      phoneNumber: yup.mixed(),
      title: yup.string().required(),
    }),
  ),
});

export const useGuestForm = (defaultData: GuestForm) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: {errors},
    formState,
    setValue,
    getValues,
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: defaultData,
    resolver: yupResolver(schema),
  });

  return {
    formState,
    register,
    getValues,
    watch,
    handleSubmit,
    control,
    errors,
    setValue,
    reset,
  };
};
