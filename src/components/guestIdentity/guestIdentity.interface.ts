export enum Titles {
  Ms = 'Ny',
  Mr = 'Tn',
}

export interface Guest {
  name: string;
  email?: string;
  phoneNumber?: string;
  title: string;
}
