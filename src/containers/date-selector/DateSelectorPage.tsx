import React from 'react';
import styled from 'styled-components';
import H1 from '../../components/Headings/H1';
import { DeliveryContextProvider } from './DeliveryContext';
import Dates from './Dates';
import Times from './Times';
import HomeDelivery from './HomeDelivery';
import SubmitButton from './SubmitButton';

const Article = styled.article`
  text-align: center;
`;

type Props = {
  title: string;
};

const DateSelectorPage: React.FC<Props> = ({ title }) => (
  <Article>
    <H1>{title}</H1>
    <DeliveryContextProvider>
      <form>
        <Dates />
        <Times />
        <HomeDelivery />
        <SubmitButton />
      </form>
    </DeliveryContextProvider>
  </Article>
);

export default DateSelectorPage;
