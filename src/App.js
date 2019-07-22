import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Theme from './Theme';
import { Home } from './views';

import './styles/sass/app.scss';

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      {/* <Router basename='/react-landing'> */}
      <Router basename='/'>
        <Switch>
          <Route path='/' component={Home} exact />
          {/* <Route component={Error} /> */}
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
