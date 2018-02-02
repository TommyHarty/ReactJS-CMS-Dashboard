require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Theme from './components/Theme';
import Dashboard from './components/Dashboard';
import Design from './components/Design';
import Pages from './components/Pages';
import AddPage from './components/AddPage';
import Notifications from './components/Notifications';
import EditPage from './components/EditPage';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Orders from './components/Orders';
import Customers from './components/Customers';
import Reviews from './components/Reviews';
import Settings from './components/Settings';
import Analytics from './components/Analytics';

render(
    <Router history={browserHistory}>
        <Route path="/theme" component={Theme}>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/design" component={Design} />
            <Route path="/pages" component={Pages} />
                <Route path="/pages/add-page" component={AddPage} />
                <Route path="/pages/edit-page/:id" component={EditPage} />
            <Route path="/products" component={Products} />
                <Route path="/products/add-product" component={AddProduct} />
                <Route path="/products/edit-product/:id" component={EditProduct} />
            <Route path="/settings" component={Settings} />
            <Route path="/orders" component={Orders} />
            <Route path="/customers" component={Customers} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/analytics" component={Analytics} />
            <Route path="/reviews" component={Reviews} />
        </Route>
    </Router>,
        document.getElementById('app'));
