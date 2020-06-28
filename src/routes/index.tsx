import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DashboardView } from '../view/dashboard/DashboardView';
import { RepositoryView } from '../view/repository/RepositoryView';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={DashboardView} />
    <Route path="/repository" component={RepositoryView} />
  </Switch>
);

export default Routes;
