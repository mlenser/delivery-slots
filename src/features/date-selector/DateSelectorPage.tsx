import React from 'react';
import { DeliveryContextProvider } from './DeliveryContext';
import DateSelectorForm from './DateSelectorForm';

const DateSelectorPage: React.FC = () => (
  <DeliveryContextProvider>
    <DateSelectorForm />
  </DeliveryContextProvider>
);

export default DateSelectorPage;
