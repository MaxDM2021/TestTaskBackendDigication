import { ObjectType, Field } from 'type-graphql';

@ObjectType()
class Query {
  @Field()
  hello: string = "Hello, World!";
}

export { Query };