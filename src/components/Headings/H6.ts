import styled from 'styled-components';
import HeadingBase from './HeadingBase';

const H6 = styled.h6<{ firstItem?: boolean }>`
  ${HeadingBase};
  font-size: ${({ theme }) => theme.sizes.small};
`;

export default H6;
