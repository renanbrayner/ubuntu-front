import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import Register from './pages/Register';
import Profile from './pages/Profile';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/cadastro' component={Register} />
        <Route path='/perfil' component={Profile} />
      </Switch>
    </Router>
  );
}

export default Routes;
