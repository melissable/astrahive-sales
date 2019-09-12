import React from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import validate from 'validate.js';

import Theme from './Theme';
import { chartjs } from './utils';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import validators from './utils/validators';
import {
  Tour,
  Home,
} from './views';

import './assets/scss/sass/app.scss';

const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      {/* <Router basename='/react-landing'> */}
      <Router basename='/' history={browserHistory}>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/demo' component={Tour} exact />
          {/* <Route component={Error} /> */}
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
