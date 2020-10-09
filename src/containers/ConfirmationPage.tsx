import React from 'react';
import styled from 'styled-components';
import H1 from '../components/Headings/H1';

const Article = styled.article`
  text-align: center;
`;

const ConfirmationPage: React.FC = () => (
  <Article>
    <H1>Confirmation</H1>
  </Article>
);

export default ConfirmationPage;
