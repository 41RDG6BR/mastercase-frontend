import React from 'react'
import Products from './products'
import Category from './category'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default props => (
    <Router>
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Ecommerce</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
                <li className="breadcrumb-item"><Link to="/category">Category</Link></li>
              </ol>
            </nav>
          </div>
        </div>
    </div>
      <Switch>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
      </Switch>
    </div>
    </Router>
)