import ArticlesView from 'containers/ArticlesView/';
import ArticleDetails from 'containers/ArticleDetails';
import ErrorPage from 'components/Error';

export default [
  {
    path: '/',
    pathId: 'articles-view',
    component: ArticlesView,
  },
  {
    path: '/:id',
    pathId: 'article-details',
    component: ArticleDetails,
  },
  {
    path: '/error/:code',
    pathId: 'error',
    component: ErrorPage,
  },
];
