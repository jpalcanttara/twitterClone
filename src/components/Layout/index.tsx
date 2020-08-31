import React from 'react';

import Main from '../Main';
import MenuBar from '../MenuBar';
import SIdeBar from '../SIdeBar';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SIdeBar />
      </Wrapper>
    </Container>
  );
};

export default Layout;
