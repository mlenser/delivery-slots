import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  DateSelectorData,
  LocalStorageKeys,
  useLocalStorage,
} from '../../hooks/useLocalStorage';
import { formatTime } from '../../utils/formatTime';
import { getTimeObject } from '../../utils/getTimeObject';
import { TimeData } from '../../types/types';

export type DeliveryContextProviderType = {
  homeDelivery: boolean;
  selectedDate: string;
  selectedTime: string;
  timesData: TimeData[];
  setHomeDelivery: (homeDelivery: boolean) => void;
  setSelectedDate: (date: string) => void;
  setSelectedTime: (date: string) => void;
  setTimesData: (timesData: TimeData[]) => void;
};

const DeliveryContext = createContext({} as DeliveryContextProviderType);

export const DeliveryContextProvider: React.FC = ({ children }) => {
  const { getItem, setItem } = useLocalStorage();
  const dateSelectorData = getItem(
    LocalStorageKeys.DATE_SELECTOR_DATA,
  ) as DateSelectorData;
  const [formattedTime, setFormattedTime] = useState<string>(
    dateSelectorData?.formattedTime || '',
  );
  const [homeDelivery, setHomeDelivery] = useState<boolean>(
    dateSelectorData?.homeDelivery || false,
  );
  const [selectedDate, setSelectedDate] = useState<string>(
    dateSelectorData?.selectedDate || '',
  );
  const [selectedTime, setSelectedTime] = useState<string>(
    dateSelectorData?.selectedTime || '',
  );
  const [timesData, setTimesData] = useState<TimeData[]>([]);

  useEffect(() => {
    if (homeDelivery && selectedTime && timesData?.length > 0) {
      const timeObject = getTimeObject({ selectedTime, timesData });
      if (!timeObject.inHomeAvailable) {
        setSelectedTime('');
      }
    }
  }, [homeDelivery]);

  // formatted time could be done with a global context, but that really depends on how the app will expand in the future
  useEffect(() => {
    if (timesData?.length > 0) {
      const { startTime, stopTime } = getTimeObject({
        selectedTime,
        timesData,
      });
      setFormattedTime(formatTime(startTime, stopTime));
    }
  }, [selectedTime]);

  useEffect(() => {
    const dataObject = {
      formattedTime,
      homeDelivery,
      selectedDate,
      selectedTime,
    };
    setItem(LocalStorageKeys.DATE_SELECTOR_DATA, dataObject);
  }, [formattedTime, homeDelivery, selectedDate, selectedTime]);

  const state = {
    homeDelivery,
    selectedDate,
    selectedTime,
    timesData,
  };

  const methods = {
    setHomeDelivery,
    setSelectedDate,
    setSelectedTime,
    setTimesData,
  };

  return (
    <DeliveryContext.Provider value={{ ...state, ...methods }}>
      {children}
    </DeliveryContext.Provider>
  );
};

export const useDeliveryContext = (): DeliveryContextProviderType =>
  useContext(DeliveryContext);

export default DeliveryContext;
