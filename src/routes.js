import React from 'react'
// import {Router, Route, Redirect, hashHistory} from 'react-router'
import {HashRouter,Route} from 'react-router-dom';

import Fulltext from './component/Fulltext'
// import About from '../'

export default props => (
    
    <HashRouter>
        <Route path = "/Fulltext" component = {Fulltext} />
    </HashRouter>
    // <Router history={hashHistory}>
    //     <Route path='/' component={Fulltext} />
    //     <Redirect from='*' to='/'/>
    // </Router>
)