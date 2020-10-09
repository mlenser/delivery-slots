import React from 'react';
import styled from 'styled-components';
import H1 from '../components/Headings/H1';
import H2 from '../components/Headings/H2';
import Link from '../components/Link';
import { getDataFromLocalStorage } from '../utils/getDataFromLocalStorage';

const Article = styled.article`
  text-align: center;
`;

const ConfirmationPage: React.FC = () => {
  const lsData = getDataFromLocalStorage();

  return (
    <Article>
      <H1>Confirmation</H1>
      <p>
        Made a mistake? <Link to="/">Edit the delivery date and time</Link>
      </p>

      <H2>Delivery details</H2>
      <p>
        Delivery scheduled for {lsData.selectedDate} at {lsData.formattedTime}
        {lsData.homeDelivery ? ' with home delivery' : ''}.
      </p>
    </Article>
  );
};

export default ConfirmationPage;
