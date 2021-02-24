import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="sidebar">
        <ul>
          {routes.map(route => (
            <li key={route.path}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <Switch>
          <Redirect exact from="/" to="/welcome" />
          {routes.map(route => (
            <Route exact path={route.path} key={route.path}>
              <route.component />
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);