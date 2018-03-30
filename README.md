# Start client

`yarn install`

`yarn add @jaredpalmer/after`

`yarn start`

By default the client will connect to a graphql server running on port `3030`. To connect to an instance of reaction, update the port to `3000` and add an authentication token from the current user session in `createApolloClient.js`

This prototype uses [After.js](https://github.com/jaredpalmer/after.js) and [Razzle](https://github.com/jaredpalmer/razzle)

