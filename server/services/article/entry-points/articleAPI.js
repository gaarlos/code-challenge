import express from 'express';
import GraphHTTP from 'express-graphql';
import FetchArticleSchema from '../schemas/fetchArticle';
import MutateArticleSchema from '../schemas/mutateArticle';

const router = express.Router();
const mutateRoutes = ['/update', '/delete', '/add'];

router.post(
  '/',
  GraphHTTP({
    schema: FetchArticleSchema,
    graphiql: true,
    pretty: true,
  }),
);

router.post(
  mutateRoutes,
  GraphHTTP({
    schema: MutateArticleSchema,
    graphiql: true,
    pretty: true,
  }),
);

export default router;
