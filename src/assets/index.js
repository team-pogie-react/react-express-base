import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Catalog from './js/components/container/Catalog';
import Brands from './js/components/container/Brands';
import reducers from './js/reducers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const createStoreWithMiddleware = applyMiddleware()(createStore);

// You can think of these components as "pages"
// in your app.

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}


ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
  <Router>
        <Switch>
          <Route exact path="/">
            <Catalog />
          </Route>
          <Route path="/about">
            <About />
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
  , document.getElementById('root'));