import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './Styles/base.scss';
import App from './Components/App';
import {
  ApolloProvider,
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache
} from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://not-fur-gotten-be.herokuapp.com/graphql'
});

const operationNameLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers }) => ({
    headers: {
      'x-gql-operation-name': operation.operationName,
      ...headers
    }
  }))
  return forward(operation);
})

const client = new ApolloClient({
  link: concat(operationNameLink, httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
