import React from 'react';
import { Form } from 'reacto-form';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Field from '@reactioncommerce/components/dist/components/Field/v1/Field';
import TextInput from '@reactioncommerce/components/dist/components/TextInput/v1/TextInput';
import ErrorsBlock from '@reactioncommerce/components/dist/components/ErrorsBlock/v1/ErrorsBlock';
import Button from '@reactioncommerce/components/dist/components/Button/v1/Button';

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ];

const GET_ADDRESS_BOOK = gql`
{
  account(id: "cmVhY3Rpb24vYWNjb3VudDpBRWtvSDZDWWZxaXZoeGNlVA==") {
    addressBook {
     	nodes {
        country
        fullName
        address1
     	  address2
        postal
        city
        region
        phone
     	}
    }
  }
}
`;

const AddressBookForm = ({ addresses }) => {
  const { 
    country, 
    fullName,
    address1,
    address2,
    postal,
    city,
    region,
    phone
  } = addresses[0]; 

  return (
    <Form style={{ width: "800px", backgroundColor: "#ebf7fc", padding: "20px"}}>
      <div className="row">
        <div className="col-md-6">
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Field name="fullName" label="Full Name">
            <TextInput name="fullName" value={fullName} />
            <ErrorsBlock names={["fullName"]} />
          </Field>
          </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Field label="Address">
            <TextInput name="address1" value={address1} />
            <ErrorsBlock names={["address1"]} />
          </Field>
       </div>
       <div className="col-md-6">
        <Field label="Address 2">
          <TextInput name="address2" value={address2} />
          <ErrorsBlock names={["address2"]} />
        </Field>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Field label="Postal">
            <TextInput name="postal" value={postal} />
            <ErrorsBlock names={["postal"]} />
          </Field>
        </div>
        <div className="col-md-4">
          <Field name="city" label="City">
            <TextInput name="city" value={city} />
            <ErrorsBlock names={["city"]} />
          </Field>
        </div>
        <div className="col-md-4">
          <Field name="regios" label="Region">
            <TextInput name="region" value={region} />
            <ErrorsBlock names={["region"]} />
          </Field>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Field label="Phone">
            <TextInput name="phone" value={phone} />
            <ErrorsBlock names={["phone"]} />
          </Field>
          </div>
      </div>
      <div style={{ marginRight: "1rem", marginTop: "20px", display: "inline" }}>
        <Button title="Save Changes">Save Changes</Button>
      </div>
      <Button title="Cancel" actionType="secondary">Cancel</Button>
    </Form>
  )
}

export default () => {
  return (
    <Query query={GET_ADDRESS_BOOK}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>

        const { nodes } = data.account.addressBook;
        
        return (
          <AddressBookForm addresses={nodes} />
        );
      }}
    </Query>
  );
}