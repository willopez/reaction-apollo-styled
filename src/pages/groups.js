import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Layout from '../components/layout';

const GROUPS_QUERY = gql`
query GroupsQuery($after: ConnectionCursor) {
  groups(shopId: "cmVhY3Rpb24vc2hvcDpKOEJocTN1VHRkZ3daeDNyeg==", first: 2, after: $after) {
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {	
          name
          shop {
            _id
          }
        }
      }
    }
}
`;

const Groups = ({ groups, onLoadMore }) => {
  return (
    <div>
      <ul className="list">
      {groups.map(group => (
        <li key={group.cursor}>
          {group.node.name}
        </li>
      ))}
      </ul>
      <button onClick={onLoadMore}>
        Load More
      </button>
    </div>
  )
}

const GroupsWithData = () => (
  <Query query={GROUPS_QUERY}>
    {({ data: { groups }, loading, fetchMore }) => {
      const { edges } = groups || [];
      

      return (
        <Layout title="Groups">
          <h1>
            Cursor Pagination with GraphQL
          </h1>
          <Groups
            groups={edges || []}
            onLoadMore={() =>
              fetchMore({
                variables: {
                  after: groups.pageInfo.endCursor
                },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                  const newEdges = fetchMoreResult.groups.edges;
                  const pageInfo = fetchMoreResult.groups.pageInfo;

                  return newEdges.length
                    ? {
                      groups: {
                        __typename: previousResult.groups.__typename,
                        edges: [...previousResult.groups.edges, ...newEdges],
                        pageInfo
                      }
                    }
                    : previousResult;
                }
              })
            }
          />
        </Layout>
      );
    }
  }
  </Query>
);

export default GroupsWithData;