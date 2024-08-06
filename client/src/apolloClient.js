import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://172.16.159.135:4000/graphql',
  }),
  cache: new InMemoryCache(),
});

export default client;

