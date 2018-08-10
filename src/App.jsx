import React, { Component } from 'react';
import Header from './Components/Elements/Header';
import Sidebar from './Components/Elements/Sidebar';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import routes from './routes';
import Loadable from 'react-loadable';
// import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Main from './Components/Main';
import CoffeeShopGrid from './Components/CoffeeShop/CoffeeShopGrid';
import { connect } from 'react-redux';
import axios from 'axios';
import callApi from './Utils/apiCaller';
import { actFetchShopRequest } from './Actions/index';
import InvoiceCustomer from './Components/InvoiceCustomer/InvoiceCustomer';

const Child = ({ match, location }) => (
    <CoffeeShopGrid match={match} location={location} />
);

const Child2 = ({ match, location }) => (
    <InvoiceCustomer match={match} location={location}/>
);
class App extends Component {

    
    render() {

        
    
        return (
            <Router>
                <div className="row">
                   
                    <Route path="/" exact component={Child}/>
                    <Route path="/invoice/:id" component={Child2}/>
                </div>
            </Router>
           
        )
    }
}


export default (App);
