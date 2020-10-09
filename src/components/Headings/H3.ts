import styled from 'styled-components';
import HeadingBase from './HeadingBase';

const H3 = styled.h3<{ firstItem?: boolean }>`
  ${HeadingBase};
  color: ${({ theme }) => theme.palette.primary[500]};
  font-size: ${({ theme }) => theme.sizes.normedium};
  @media ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.sizes.medium}};
  }
`;

export default H3;
