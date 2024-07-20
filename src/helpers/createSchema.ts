import { GraphQLSchema } from 'graphql';
import { BuildSchemaOptions, buildSchemaSync } from 'type-graphql';
import { Container } from 'typedi';
import { HelloResolver } from '../resolvers/HelloResolver'; // Импортируем резолвер

export function createSchema(options?: Omit<BuildSchemaOptions, 'resolvers'>): GraphQLSchema {
  return buildSchemaSync({
    resolvers: [HelloResolver], // Регистрируем резолвер здесь
    emitSchemaFile: true,
    container: Container,
    validate: true,
    ...options,
  });
}
