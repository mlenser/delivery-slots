import React, { createContext, useContext, useEffect, useState } from 'react';

export type TimeData = {
  deliveryDate: string;
  deliveryTimeId: string;
  inHomeAvailable: boolean;
  startTime: string;
  stopTime: string;
};

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
  const lsData = localStorage.getItem('dateSelectorData') || '';
  const parsedLsData = JSON.parse(lsData);
  const [homeDelivery, setHomeDelivery] = useState<boolean>(
    parsedLsData?.homeDelivery || false,
  );
  const [selectedDate, setSelectedDate] = useState<string>(
    parsedLsData?.selectedDate || '',
  );
  const [selectedTime, setSelectedTime] = useState<string>(
    parsedLsData?.selectedTime || '',
  );
  const [timesData, setTimesData] = useState<TimeData[]>([]);

  useEffect(() => {
    if (homeDelivery && selectedTime) {
      const timeObject = timesData.find(
        (time) => time.deliveryTimeId === selectedTime,
      );
      if (timeObject && !timeObject.inHomeAvailable) {
        setSelectedTime('');
      }
    }
  }, [homeDelivery]);

  useEffect(() => {
    const dataObject = {
      homeDelivery,
      selectedDate,
      selectedTime,
    };
    localStorage.setItem('dateSelectorData', JSON.stringify(dataObject));
  }, [homeDelivery, selectedDate, selectedTime]);

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
