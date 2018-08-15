import ArticlesView from 'containers/ArticlesView/';
import ArticleDetails from 'containers/ArticleDetails';

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
];
