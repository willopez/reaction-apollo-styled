import React from 'react';
import styled from 'styled-components';

import Header from './header';
import SideMenu from './side-menu';

export default ({children }) => {
  const Container = styled.div`
    width: 100%;
  `;
  const Content = styled.div`
    width: 75%;
  `;

  return (
    <Container>
      <Header>
        Header
      </Header>
      <SideMenu />
      <Content>
        { children}
      </Content>
    </Container>
  );
};
