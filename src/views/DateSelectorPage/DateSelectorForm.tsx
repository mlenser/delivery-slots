import React from 'react';
import { navigate } from 'gatsby';
import Dates from './Dates';
import Times from './Times';
import HomeDelivery from './HomeDelivery';
import SubmitButton from './SubmitButton';

const DateSelectorForm: React.FC = () => {
  const onSubmit = (): void => {
    navigate('/confirmation');
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <Dates />
      <Times />
      <HomeDelivery />
      <SubmitButton />
    </form>
  );
};

export default DateSelectorForm;
