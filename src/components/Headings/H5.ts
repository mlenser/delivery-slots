import styled from 'styled-components';
import HeadingBase from './HeadingBase';

const H5 = styled.h5<{ firstItem?: boolean }>`
  ${HeadingBase};
  font-size: ${({ theme }) => theme.sizes.normal};
`;

export default H5;
