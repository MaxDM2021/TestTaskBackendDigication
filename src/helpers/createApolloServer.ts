import { ApolloServer, Config as ApolloServerConfig } from 'apollo-server-koa';
import { createSchema } from './createSchema';

export default async function createApolloServer(apolloServerConfig?: ApolloServerConfig) {
  const schema = await createSchema();
  
  const apolloServer = new ApolloServer({
    debug: true,
    schema,
    ...apolloServerConfig,
  });

  return apolloServer;
}