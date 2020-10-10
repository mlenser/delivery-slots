import React from 'react';
import { DeliveryContextProvider } from './DeliveryContext';
import DateSelectorForm from './DateSelectorForm';

const Index: React.FC = () => (
  <DeliveryContextProvider>
    <DateSelectorForm />
  </DeliveryContextProvider>
);

export default Index;
