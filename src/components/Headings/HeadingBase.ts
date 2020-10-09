import { css } from 'styled-components';

const HeadingBase = css<{ firstItem?: boolean }>`
  font-family: 'MrJeeves', Times New Roman, Times, serif;
  font-variant: small-caps;
  font-weight: bold;
  letter-spacing: 0.025em;
  line-height: 1.05em;
  margin-bottom: 0;
  margin-top: ${({ firstItem }) => (firstItem ? 0 : '0.5em')};
`;

export default HeadingBase;
