import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const GET_VIEWER = gql`
  {
    viewer {
      name
      emailRecords {
        address
      }
    }
  }
`;

export default () => {
  const Container = styled.div`
    padding-left: 40px;
    margin-bottom: 40px;
  `;

  const Header = styled.h1`
    margin: 20px 0 0 0;
  `;

  return (
    <Container>
      <Query query={GET_VIEWER}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>

          const { viewer } = data;
          return (
            <React.Fragment>
              <Header>
                {viewer.name}
              </Header>
              <span>{viewer.emailRecords[0].address}</span>
            </React.Fragment>
          );
        }}
      </Query>
    </Container>
  );
};