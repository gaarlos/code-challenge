import { GraphQLBoolean, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema } from 'graphql';

import db from '../DB/articleDAL';
import articleType from '../types/article';

const MutateArticle = new GraphQLObjectType({
  name: 'MutateArticle',
  description: 'This mutates articles in db',
  fields: () => ({
    updateArticle: {
      type: articleType,
      args: {
        id: { type: GraphQLString },
        author: { type: GraphQLString },
        content: { type: GraphQLString },
        excerpt: { type: GraphQLString },
        published: { type: GraphQLBoolean },
        tags: { type: new GraphQLList(GraphQLString) },
        title: { type: GraphQLString },
      },
      resolve: (root, { id, ...article }) => db.Article.findByIdAndUpdate(id, article, { new: true }),
    },
    deleteArticle: {
      type: articleType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (root, { id }) => db.Article.findByIdAndRemove(id),
    },
    addArticle: {
      type: articleType,
      args: {
        author: { type: GraphQLString },
        content: { type: GraphQLString },
        excerpt: { type: GraphQLString },
        published: { type: GraphQLBoolean },
        tags: { type: new GraphQLList(GraphQLString) },
        title: { type: GraphQLString },
      },
      resolve: (root, article) => db.Article.create(article),
    },
  }),
});

const MutateArticleSchema = new GraphQLSchema({
  query: MutateArticle,
});

export default MutateArticleSchema;
