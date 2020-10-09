import React, { createContext, useContext, useState } from 'react';

export type DeliveryContextProviderType = {
  selectedDate: string;
  selectedTime: string;
  setSelectedDate: (date: string) => void;
  setSelectedTime: (date: string) => void;
};

const DeliveryContext = createContext({} as DeliveryContextProviderType);

export const DeliveryContextProvider: React.FC = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const state = {
    selectedDate,
    selectedTime,
  };

  const methods = {
    setSelectedDate,
    setSelectedTime,
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
