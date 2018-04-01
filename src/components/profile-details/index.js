import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Button from '@reactioncommerce/components/dist/components/Button/v1/Button';

import { FieldContainer, FieldLabel , FieldValue } from './styles';

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

const AccountDetails = ({ viewer }) => {
  return (
    <React.Fragment>
      <FieldContainer>
        <FieldLabel>
          Name
        </FieldLabel>
        <FieldValue>
          { viewer.name }
        </FieldValue>
      </FieldContainer>
      <FieldContainer>
        <FieldLabel>
          Email
        </FieldLabel>
        <FieldValue>
          { viewer.emailRecords[0].address }
        </FieldValue>
      </FieldContainer>
      <FieldContainer>
        <FieldLabel>
          Password
        </FieldLabel>
        <FieldValue>
          &middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;
        </FieldValue>
      </FieldContainer>
    </React.Fragment>
  );
}

export default ( { viewer }) => {
  return (
    <Query query={GET_VIEWER}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>

        const { viewer } = data;
        return (
          <AccountDetails viewer={viewer} />
        );
      }}
    </Query>
  );
}
