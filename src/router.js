import { Route, Router, Switch } from 'dva/router';
import React from 'react';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';

function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/product" exact component={Products} />
            </Switch>
        </Router>
    );
}

export default RouterConfig;
