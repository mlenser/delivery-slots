import React from 'react';
import H3 from '../components/Headings/H3';

type Props = {
  date: string;
  times?: any;
};

const Date: React.FC<Props> = ({ date, times, ...props }) => (
  <H3 {...props}>{date}</H3>
);

export default Date;
