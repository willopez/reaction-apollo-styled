import React from 'react';
import styled from 'styled-components';

import Header from './header';
import SideMenu from './side-menu';

export default ({title, children }) => {
  const Container = styled.div`
    display: flex;
  `;
  const Content = styled.div`
    width: 100%;
  `;

  return (
    <div>
    <Header>
      Header
    </Header>
    <Container>
      <SideMenu />
      <Content>
        <h2>{title}</h2>
        { children}
      </Content>
    </Container>
    </div>
  );
};
