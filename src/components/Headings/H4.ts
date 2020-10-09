import styled from 'styled-components';
import HeadingBase from './HeadingBase';

const H4 = styled.h4<{ firstItem?: boolean }>`
  ${HeadingBase};
  color: ${({ theme }) => theme.palette.primary[500]};
  font-size: ${({ theme }) => theme.sizes.normal};
  @media ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.sizes.normedium};
  }
`;

export default H4;
