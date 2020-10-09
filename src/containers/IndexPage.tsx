import React from 'react';
import styled from 'styled-components';
import H1 from '../components/Headings/H1';

const Article = styled.article`
  text-align: center;
`;

type Props = {
  title: string;
};

const IndexPage: React.FC<Props> = ({ title }) => (
  <Article>
    <H1>{title}</H1>

  </Article>
);

export default IndexPage;
