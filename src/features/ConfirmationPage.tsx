import React from 'react';
import H2 from '../components/Headings/H2';
import Link from '../components/Link';
import { getDataFromLocalStorage } from '../utils/getDataFromLocalStorage';

const ConfirmationPage: React.FC = () => {
  const lsData = getDataFromLocalStorage();

  return (
    <>
      <p>
        Made a mistake? <Link to="/">Edit the delivery date and time</Link>
      </p>

      <H2>Delivery details</H2>
      <p>
        Delivery scheduled for {lsData.selectedDate} at {lsData.formattedTime}
        {lsData.homeDelivery ? ' with home delivery' : ''}.
      </p>
    </>
  );
};

export default ConfirmationPage;
