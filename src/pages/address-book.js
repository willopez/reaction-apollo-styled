import React from 'react';

import Layout from '../components/layout';
import AddressBookDetails from '../components/address-book';

const AddressBook = ({ children }) => {

  return (
    <Layout title="Address Book">
      <AddressBookDetails />
    </Layout>
  )
}


export default AddressBook;