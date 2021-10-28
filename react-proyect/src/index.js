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
  uri: 'http://labasica.lndo.site:8080/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM4ZGY4ZTA0MGY3Y2U2OTgyY2VmNTM0YTcxZThmYTliNTZkMjljYjJkMjI1ZjNjNGNiYjA2MTgxYmY3MDk5MWM3ZDQ2NDg2YjQwNGUwOGQ5In0.eyJhdWQiOiJjMWRkZTkzZS01ODY1LTQ4ZjctODM1NC05NzdjM2EyNWI5Y2QiLCJqdGkiOiJjOGRmOGUwNDBmN2NlNjk4MmNlZjUzNGE3MWU4ZmE5YjU2ZDI5Y2IyZDIyNWYzYzRjYmIwNjE4MWJmNzA5OTFjN2Q0NjQ4NmI0MDRlMDhkOSIsImlhdCI6MTYzNTQzMzk3NCwibmJmIjoxNjM1NDMzOTc0LCJleHAiOjE2MzYwMzg3NzQsInN1YiI6IjEiLCJzY29wZXMiOlsiYXV0aGVudGljYXRlZCIsImVkaXRvciJdfQ.BCuMEYWK75g2fB0_0VHpAwRbh96x5Kla8WnRz0fZtMAIHN0bRcoKNxoN0jhdJEdxP-q0qQwLjQJvc4ZmS5dMaTD-wwVqj9GPjOhHu9IXlJ_c4vv4Z3-xQzyDbXFxlbB8of6yNH4RY0nadv385pXZeIj0meyfsnSSfd_LaMejcoFJYysc14CK4WNsxP0L6bncfYrn6URahC8vp0lzmlqKc-w3qpcs2aOz6tOM0ZLnpckB5jkgP5ld7KkK01s3_b6VWqVchpkwicDjo9IBgcGGJG0czj78Jrbuz5NHaTfignoZsdk7ZzgEOW_gP_tUxbjfv93PnNzw67-kxQrLutUzMw';
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
