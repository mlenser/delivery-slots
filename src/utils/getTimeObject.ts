import { TimeData } from '../types/types';

export const getTimeObject = ({
  selectedTime,
  timesData,
}: {
  selectedTime: string;
  timesData: TimeData[];
}): TimeData => {
  const timeObject = timesData.find(
    (time) => time.deliveryTimeId === selectedTime,
  );
  if (timeObject) {
    return timeObject;
  }

  return {
    deliveryDate: '',
    deliveryTimeId: '',
    inHomeAvailable: false,
    startTime: '',
    stopTime: '',
  };
};
