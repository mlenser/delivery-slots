import React from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';
import Fab from '@material-ui/core/Fab';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PageWrapper from './PageWrapper';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const StyledFab = styled(Fab)`
  bottom: 1rem;
  position: fixed;
  right: 1rem;
`;

type Props = {
  children: React.ReactNode;
  location?: {
    pathname: string;
  };
};

const LazyScrollTop = loadable(() => import('./ScrollTop'));

const Layout: React.FC<Props> = ({ children }) => (
  <AppWrapper>
    <PageWrapper>
      <div id="top" />
      <main>
        {children}
        <LazyScrollTop>
          <StyledFab aria-label="scroll back to top" size="small">
            <ArrowUpwardIcon />
          </StyledFab>
        </LazyScrollTop>
      </main>
    </PageWrapper>
  </AppWrapper>
);

export default Layout;
