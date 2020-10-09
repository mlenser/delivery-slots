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
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [timesData, setTimesData] = useState<TimeData[]>([]);
  const [homeDelivery, setHomeDelivery] = useState<boolean>(false);

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
