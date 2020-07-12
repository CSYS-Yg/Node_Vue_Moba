import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import { Button } from 'antd';

const App = () => {
    return (<Button type="primary" shape="round">
        Download
    </Button>)
}

ReactDOM.render(
    // <React.StrictMode>
    <Router>
        <Route path="/" component={App}>
            {/* <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} /> */}
        </Route>
    </Router>
    // </React.StrictMode>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
