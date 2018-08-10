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

const Child = ({ match }) => (
    <InvoiceCustomer />
);


class App extends Component {

    
    constructor(props, context) {
        super(props, context);
        this.state = {
            shops: []
        }
    }



    componentDidMount() {
        callApi('shops/get-list', 'GET', null, {
            'token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjJAZ21haWwuY29tIiwiaWF0IjoxNTI2Njk2Njc5fQ.mMmoD11AmjiyARIWufhJDl3LifDAf8LqSAzKEzeV7bE"
        }).then(res => {
            console.log('res data', res)
            this.setState({
                shops: res.data.shops
            })
        });
        this.props.fetchAllShops();
    }

    onClick = () => {
        console.log('click');
        <Redirect to="/invoice" />
    }

    showShops = (shops) => {
        // let { match } = this.props; // this.props.match
        // let url = match.url;
        let result = null;
        if (shops.length > 0) {
            result = shops.map((shop, index) => {
                return (
                    <div className="col-md-6 col-lg-6 col-xlg-4" key={index}>
                        <div className="card card-body">
                            <div className="row">
                                <div className="col-md-4 col-lg-3 text-center">
                                    {/* <NavLink to={`${url}/${shop.shop_id}`}><img src="../assets/images/users/1.jpg" alt="user" className="img-circle img-responsive" /></NavLink> */}
                                    {/* <Link to={`invoicecs/${shop.shop_id}`}><img src="../assets/images/users/1.jpg" alt="user" className="img-circle img-responsive" /></Link> */}
                                    <Link to="/invoice"><img src="../assets/images/users/1.jpg" alt="user" className="img-circle img-responsive" /></Link>
                                </div>
                                <div className="col-md-8 col-lg-9">
                                    <h3 className="box-title m-b-0" onClick={this.onClick}>{shop.shop_name}</h3> <small>{shop.shop_email}</small>
                                    <address>
                                        {shop.shop_address}
                                        <br />
                                        <br />
                                        <abbr title="Phone">P:</abbr> {shop.shop_phone}
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        return result;
    }
    render() {

        var { shopData } = this.props;
    
        return (
            <Router>
                <div className="row">
                    {this.showShops(shopData)}
                    {/* <Route path="/invoice/:id" component={Child} /> */}
                    <Route path="/invoice" component={Child} />
                </div>
            </Router>
           
        )
    }
}

const mapStateToProps = state => {
    return {
        shopData: state.shops
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllShops: () => {
            dispatch(actFetchShopRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
