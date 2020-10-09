import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import H1 from '../components/Headings/H1';
import H2 from '../components/Headings/H2';

const Article = styled.article`
  text-align: center;
`;

type Props = {
  title: string;
};

const IndexPage: React.FC<Props> = ({ title }) => {
  const [datesData, setDatesData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://api.mathem.io/mh-test-assignment/delivery/dates',
      );
      const data = await response.json();
      setDatesData(data);
    })();
  }, []);

  return (
    <Article>
      <H1>{title}</H1>
      <H2>Dates</H2>
      {datesData?.map((date) => (
        <div key={date}>{date}</div>
      ))}
    </Article>
  );
};

export default IndexPage;
