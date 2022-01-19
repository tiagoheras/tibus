import React from 'react';
import './App.css';
import Catalogo from '../Catalogo/Catalogo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import ProductPage from '../ProductPage/Productpage';
import Informacion from '../Informacion/Informacion';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} exact component={LandingPage} />
          <Route path={process.env.PUBLIC_URL + '/catalogo'} exact component={Catalogo} />
          <Route path={process.env.PUBLIC_URL  + '/catalogo/:id'} component={ProductPage} />
          <Route path={process.env.PUBLIC_URL + '/informacion'} component={Informacion} />
        </Switch>
      </Router>
    )
  }
}

export default App;