import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  useQuery,
  gql
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
<<<<<<< HEAD
  uri: 'https://www.gastby-la-basica.rcnra-dev.com/graphql',
=======
  uri: 'http://labasica.lndo.site:8000/graphql',
>>>>>>> 9ad69bb01088123d1d7ac5e8d068f58740f90dea
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
<<<<<<< HEAD
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjllNjg4ODkyZmZhZDJmNGI3MGY5MWY3YWZlZTc5Y2FjMzgxMWRmZDU4NTAwZjA0MDM3YjEzYzhjNWFmYTYwNzhlMzcyNjFlMzNiYWQ2ZmUxIn0';
=======
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZkZDlkMDZkNjViY2YyOTc0YzM4NDAzOTc5NDg4ZWQ2NjQ5YzY0NzA4YTRiYTA0ZTdmZmMxZDFiZDI5N2UwY2RlZWJiNzBkZTE1NTExYjRkIn0.eyJhdWQiOiJiZTdkNzJmMC00MTM3LTQ4ZTEtYWUyNS1lYjA4YmE0YzMzZjMiLCJqdGkiOiJmZGQ5ZDA2ZDY1YmNmMjk3NGMzODQwMzk3OTQ4OGVkNjY0OWM2NDcwOGE0YmEwNGU3ZmZjMWQxYmQyOTdlMGNkZWViYjcwZGUxNTUxMWI0ZCIsImlhdCI6MTYzNTg2NjkyMCwibmJmIjoxNjM1ODY2OTIwLCJleHAiOjE2MzY0NzE3MTksInN1YiI6IjEiLCJzY29wZXMiOlsiYXV0aGVudGljYXRlZCIsImVkaXRvciJdfQ.TpaDkS_-TeYf6B4J4z--QeOxNoDOOUe-SvPGw0D1DoNA8s1cm2KmJaH11iMEtOMhp9G3mECsCEmYS_qBUCd1M5wCLwCcidSAHwxa3q1MxqUIVSKIi7HRlZhucYg-UeG4FZw3KfVkej0jociYAmSoV6JVBhUvVlAvLhEbTnYewYKZCivt9kiFeNr02Y59h_aXntDGGBTp40RqxFfRC2JI6MgBAmTT4FgZqYBy-t0T1J35DyY_xGjkAPJDV0Q2aULXusRyh3owXjS1F7FfMBJocXejwFHT5Q78f4s88-OsVya68t-Qz6DsqPfi2106LZe1ZM1Z3eZyG8bfHAPGHbA1Uw';
>>>>>>> 9ad69bb01088123d1d7ac5e8d068f58740f90dea
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
