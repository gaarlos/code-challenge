import React from 'react';
import { Route } from 'react-router-dom';
import routes from 'config/routes';

import { Header, Content, Footer } from 'layout';

const AppWithLayout = () => [
  <Header key="header" />,
  <Content key="content">
    {routes.map(({ path, pathId, component }) => (
      <Route path={path} key={pathId} exact component={component} />
    ))}
  </Content>,
  <Footer key="footer" />,
];

export default AppWithLayout;
