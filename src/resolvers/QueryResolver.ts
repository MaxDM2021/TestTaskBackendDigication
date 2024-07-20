import { Resolver, Query } from 'type-graphql';
import { Query as QueryType } from '../schema/Query';

@Resolver()
class QueryResolver {
  @Query(() => QueryType)
  hello(): QueryType {
    return new QueryType();
  }
}

export { QueryResolver };