import React from 'react';
import {
  BrowserRouter as Router,
  Routes as ReactRoutes,
  Route,
} from 'react-router-dom';
import loadable from '@loadable/component';

const List = loadable(() => import('../pages/List'));
const CreateEdit = loadable(() => import('../pages/CreateEdit'));
const NotFound = loadable(() => import('../pages/NotFound'));

const Layout = loadable(() => import('../layout'));

const Routes = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/survey-question/" element={<Layout />}>
          <Route index element={<List />} />
          <Route path="create" element={<CreateEdit />} />
          <Route path="edit/:id" element={<CreateEdit />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </ReactRoutes>
    </Router>
  );
};

export default Routes;
