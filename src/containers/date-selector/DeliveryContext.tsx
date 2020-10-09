import React, { createContext, useContext, useEffect, useState } from 'react';
import { getDataFromLocalStorage } from '../../utils/getDataFromLocalStorage';
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
  const lsData = getDataFromLocalStorage();
  const [formattedTime, setFormattedTime] = useState<string>(
    lsData?.formattedTime || '',
  );
  const [homeDelivery, setHomeDelivery] = useState<boolean>(
    lsData?.homeDelivery || false,
  );
  const [selectedDate, setSelectedDate] = useState<string>(
    lsData?.selectedDate || '',
  );
  const [selectedTime, setSelectedTime] = useState<string>(
    lsData?.selectedTime || '',
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
      homeDelivery,
      formattedTime,
      selectedDate,
      selectedTime,
    };
    localStorage.setItem('dateSelectorData', JSON.stringify(dataObject));
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
