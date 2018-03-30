import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Layout from '../components/layout';

const GET_VIEWER = gql`
  {
    viewer {
      name
    }
  }
`;

export const ProfileDetails = ( { viewer }) => {
  return (
    <Query query={GET_VIEWER}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>

        const { viewer } = data;
        return (
          <div>Name: {viewer.name}</div>
        );
      }}
    </Query>
  );
}

const Profile = ({ children }) => {

  return (
    <Layout title="Profile">
      <ProfileDetails />
    </Layout>
  )
}


export default Profile;