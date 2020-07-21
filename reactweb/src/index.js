import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


import ReactLayout from '../src/layout/index'
import Dashboard from '../src/pages/dashboard/index'

ReactDOM.render(
    // <React.StrictMode>
    <Router>
        <ReactLayout>
            <Route path="/" exact component={Dashboard}>
            </Route>
            <Route path="/training" component={Dashboard}>
            </Route>
        </ReactLayout>
    </Router>
    // </React.StrictMode>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
