import {Control, FieldErrors, UseFieldArrayRemove} from 'react-hook-form';

export interface GuestFormProps {
  control: Control<
    {
      guests?:
        | {
            email?: any;
            phoneNumber?: any;
            title: string;
            name: string;
          }[]
        | undefined;
    },
    any
  >;
  remove: UseFieldArrayRemove;
  error: FieldErrors<{
    guests?:
      | {
          email?: any;
          phoneNumber?: any;
          title?: any;
          name: string;
        }[]
      | undefined;
  }>;
  index: number;
}
