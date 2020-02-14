// polyfills to support IE 9 and friends
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Dashboard from './Dashboard';
import * as serviceWorker from './serviceWorker';
import './index.scss';

// Google Analytics tracking

class LemShop extends React.Component {
  routing = (
    <Router key="1">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route component={Dashboard} />
      </Switch>
    </Router>
  );

  render() {
    return [this.routing, <div key="2" />];
  }
}

ReactDOM.render(<LemShop />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
