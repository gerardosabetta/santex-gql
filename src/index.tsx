import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './globalStyles';

const commerceLink = createHttpLink({
  uri: 'https://demo.vendure.io/shop-api',
});

const addAuthHeader = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('Auth-Token');
  if (token) {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return forward(operation);
});

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const context = operation.getContext();
    const authHeader = context.response.headers.get('Vendure-Auth-Token');

    if (authHeader) {
      localStorage.setItem('Auth-Token', authHeader);
    }
    return response;
  });
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([afterwareLink, addAuthHeader, commerceLink]),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
