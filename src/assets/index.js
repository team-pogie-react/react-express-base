import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './js/reducers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { Grommet } from 'grommet';
import themeConfig from './js/config/themeConfig';

import Catalog from './js/components/container/Catalog';
import Brands from './js/components/container/Brands';
import Account from './js/components/container/Account';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// You can think of these components as "pages"
// in your app.

function Login() {
  return (
    <div>
      <h2>Login</h2>
    </div>
  );
}

function Register() {
  return (
    <div>
      <h2>Register</h2>
    </div>
  );
}

ReactDOM.render(
<Grommet theme={themeConfig} full>
<Provider store={createStoreWithMiddleware(reducers)}>
  <Router>
        <Switch>
          <Route exact path="/">
            <Catalog />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/account/login">
            <Login />
          </Route>
          <Route path="/account/register">
            <Register />
          </Route>
          <Route path="/brands">
            <Brands />
          </Route>
          <Route path="/brands/*" component="Brands">
            <Brands />
          </Route>
        </Switch>
    </Router>
</Provider>
</Grommet>
  , document.getElementById('root'));