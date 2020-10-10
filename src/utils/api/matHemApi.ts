import { DATES_API, TIMES_API } from '../../constants/constants';
import { TimeData } from '../../types/types';

export const getDeliveryDates = async (): Promise<string[]> => {
  const response = await fetch(DATES_API);
  return await response.json();
};

export const getDeliveryTimes = async (
  selectedDate: string,
): Promise<TimeData[]> => {
  const response = await fetch(`${TIMES_API}/${selectedDate}`);
  return await response.json();
};
