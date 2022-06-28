import React from 'react';
import {
  BrowserRouter as Router,
  Routes as ReactRoutes,
  Route,
} from 'react-router-dom';
import loadable from '@loadable/component';

const List = loadable(() => import('../pages/List'));
const Create = loadable(() => import('../pages/Create'));
const NotFound = loadable(() => import('../pages/NotFound'));

const Layout = loadable(() => import('../layout'));

const Routes = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/" element={<Layout />}>
          <Route index element={<List />} />
          <Route path="create" element={<Create />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </ReactRoutes>
    </Router>
  );
};

export default Routes;
