import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema } from 'graphql';

import db from '../DB/articleDAL';
import articleType from '../types/article';

const FetchArticle = new GraphQLObjectType({
  name: 'FetchArticle',
  description: 'This fetchs articles from db',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      resolve: () => db.Article.find(),
    },
    article: {
      type: articleType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (root, { id }) => db.Article.findById(id),
    },
  }),
});

const FetchArticleSchema = new GraphQLSchema({
  query: FetchArticle,
});

export default FetchArticleSchema;
