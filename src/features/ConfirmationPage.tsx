import React from 'react';
import H2 from '../components/Headings/H2';
import Link from '../components/Link';
import {
  DateSelectorData,
  LocalStorageKeys,
  useLocalStorage,
} from '../hooks/useLocalStorage';

const ConfirmationPage: React.FC = () => {
  const { getItem } = useLocalStorage();
  const dateSelectorData = getItem(
    LocalStorageKeys.DATE_SELECTOR_DATA,
  ) as DateSelectorData;

  return (
    <>
      <p>
        Made a mistake? <Link to="/">Edit the delivery date and time</Link>
      </p>

      <H2>Delivery details</H2>
      <p>
        Delivery scheduled for {dateSelectorData.selectedDate} at{' '}
        {dateSelectorData.formattedTime}
        {dateSelectorData.homeDelivery ? ' with home delivery' : ''}.
      </p>
    </>
  );
};

export default ConfirmationPage;
