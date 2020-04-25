import React, { Component } from 'react';
import Products from './component/Products'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import Routes from './routes'

class App extends Component {

  render() {
 
   return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            <li>
              <Link to="/users">Products</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/">
            <Home />
          </Route> */}
          <Route path="/users">
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
      );
    }

};

export default App;
