import React, { Component } from 'react';
import { Route, Switch, browserHistory } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter, Link } from 'react-router-dom';
import Camper from './Camper'
import Campers from './Campers'
import MainPage from '../components/MainPage'


const history = createBrowserHistory();

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <div>
        <BrowserRouter history={history}>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/campers' component={Campers} />
            <Route exact path='/campers/:id' component={Camper} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  };
};

export default App;
