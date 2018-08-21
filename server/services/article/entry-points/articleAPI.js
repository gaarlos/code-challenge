import express from 'express';
import GraphHTTP from 'express-graphql';
import FetchArticleSchema from '../domain/fetchArticleService';
import MutateArticleSchema from '../domain/mutateArticleService';

const router = express.Router();
const mutateRoutes = ['/update', '/delete', '/create'];

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
