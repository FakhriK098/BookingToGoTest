import moment from 'moment';

export const formatDateString = (
  dateString: string,
  format: string,
): string => {
  const dateObject = moment(dateString, 'YYYY-MM-DD');
  return dateObject.format(format);
};

export const calculateDays = (checkIn: string, checkOut: string): number => {
  const startDate = moment(checkIn);
  const endDate = moment(checkOut);
  const differenceInDays = endDate.diff(startDate, 'days');

  return differenceInDays;
};
