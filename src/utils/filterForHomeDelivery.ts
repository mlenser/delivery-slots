import { TimeData } from '../types/types';

const filterForHomeDelivery = ({
  homeDelivery,
  time,
}: {
  homeDelivery: boolean;
  time: TimeData;
}): boolean => {
  if (homeDelivery) {
    return time.inHomeAvailable;
  }
  return true;
};
