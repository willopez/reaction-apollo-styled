import React from 'react';

import Layout from '../components/layout';
import ProfileDetails from '../components/profile-details';

const Profile = ({ children }) => {

  return (
    <Layout title="Account">
      <ProfileDetails />
    </Layout>
  )
}


export default Profile;