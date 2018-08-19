import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from 'config/routes';
import ErrorPage from 'components/Error';

import { Header, Content, Footer } from 'layout';

const AppWithLayout = () => [
  <Header key="header" />,
  <Content key="content">
    <Switch>
      {routes.map(({ path, pathId, component }) => (
        <Route path={path} key={pathId} exact component={component} />
      ))}
      <Route component={ErrorPage} />
    </Switch>
  </Content>,
  <Footer key="footer" />,
];

export default AppWithLayout;
