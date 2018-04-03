import * as React from 'react';
import { AfterRoot, AfterData } from '@jaredpalmer/after';
import { ServerStyleSheet, StyleSheetManager, injectGlobal } from 'styled-components'


export default class Document extends React.Component {
  static async getInitialProps({ assets, data, renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = await renderPage(App => props => (
      <StyleSheetManager sheet={sheet.instance}>
        <App {...props} />
      </StyleSheetManager>
     ))

    const styleTags = sheet.getStyleElement()

    return {
      assets, data, styleTags, ...page
    };
  }

  render() {

    const {
      helmet,
      assets,
      data,
      styleTags,
      initialApolloState,
    } = this.props;
    // get attributes from React Helmet
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    injectGlobal `
      body {
        margin: 0;
        font-family: 'Source Sans Pro', Helvetica;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.2px;
        text-align: left;
        color: #505558;
        height: 100%;
      }

    `;

    return (
      <html {...htmlAttrs}>
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <title>Reaction with Apollo!</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css" integrity="sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1" crossOrigin="anonymous" />
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {styleTags}
        </head>
        <body {...bodyAttrs}>
          <AfterRoot />
          <AfterData data={data} />
          <script dangerouslySetInnerHTML={{ __html:  `window.__APOLLO_STATE__=${JSON.stringify(initialApolloState).replace(
            /</g,
            '\\u003c'
          )};` }} />
          <script
            type="text/javascript"
            src={assets.client.js}
            defer
            crossOrigin="anonymous"
          />
        </body>
      </html>
    );
  }
}
