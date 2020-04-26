import React from 'react'
import Products from './component/Products'
import Fulltext from './component/Fulltext'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default props => (
    <Router>
    <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="index.html">Ecommerce</a>
    </div>
    </nav>
    <div class="container">
    <div class="row">
        <div class="col">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page"><Link to="/users">Home</Link></li>
                    <li class="breadcrumb-item"><Link to="/users">Products</Link></li>
                    <li class="breadcrumb-item"><Link to="/fulltext">Fulltext</Link></li>
                </ol>
            </nav>
        </div>
    </div>
    </div>
        <Switch>
          <Route path="/fulltext">
            <Fulltext />
          </Route>
          <Route path="/users">
            <Products />
          </Route>
        </Switch>
    </div>
    </Router>
)