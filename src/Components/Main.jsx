import React, { Component } from 'react';
import Header from './Elements/Header';
import Sidebar from './Elements/Sidebar';
import Breadcrumb from './Elements/Breadcrumb';
import EmployeeList from './Employee/EmployeeList';
import { BrowserRouter as Router, Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';
import CoffeeShopList from './CoffeeShop/CoffeeShopList';
import CoffeeShopGrid from './CoffeeShop/CoffeeShopGrid';
import CoffeeShopDetail from './CoffeeShop/CoffeeShopDetail';
import Invoice from './Invoice/Invoice';
import NotFound from './404/NotFound';
import routes from '../routes';
import Login from './Login/Login';
// import Employee from './Components/Employee';
// import $ from 'jquery';
// import ROUTER from '../ROUTER';
import _ from 'lodash';
import {Load} from './Load';
import {withRouter} from 'react-router';

// class Main extends Component {

//     state = {
//         number: 1
//     }

//     showContentMenus = (routes) => {
//         var result = null;
//         if (routes.length > 0) {
//             result = routes.map((route, index) => {
//                 console.log(route)
//                 // if (route.path != '/login') {
//                 return (
//                     <Route
//                         key={index}
//                         path={route.path}
//                         exact={route.exact}
//                         component={route.main}
//                     />
//                 );
//                 console.log(result);
//                 // }
//             }
//             )
//         }
//         return result;
//     }

//     render() {
//         if (localStorage.getItem("tokenUser") && localStorage.getItem("dataUser")) {
//             // <Router>
//             // return   <Main></Main> 
//             // </Router>   
//             // <Redirect to='/main'/>
//             <Redirect to='/' />
//             // render = <Main></Main>
//             // <Redirect to='/home'/>
//             // render = <Redirect to='/'/>
//         }
//         else {
//             // render = <Login></Login>
//             <Redirect to='/login' />
//         }
//         return (
//             // <Router>
//                 <React.Fragment>

//                     {/* ============================================================== */}
//                     {/* Preloader - style you can find in spinners.css */}
//                     {/* ============================================================== */}
//                     <div className="preloader">
//                         <svg className="circular" viewBox="25 25 50 50">
//                             <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" /> </svg>
//                     </div>
//                     {/* ============================================================== */}
//                     {/* Main wrapper - style you can find in pages.scss */}
//                     {/* ============================================================== */}
//                     <div id="main-wrapper">
                        
//                         {/* ============================================================== */}
//                         {/* Topbar header - style you can find in pages.scss */}
//                         {/* ============================================================== */}
//                         <Header number={this.state.number}></Header>
//                         {/* ============================================================== */}
//                         {/* End Topbar header */}
//                         {/* ============================================================== */}
//                         {/* ============================================================== */}
//                         {/* Left Sidebar - style you can find in sidebar.scss  */}
//                         {/* ============================================================== */}
//                         <Sidebar></Sidebar>
//                         {/* ============================================================== */}
//                         {/* End Left Sidebar - style you can find in sidebar.scss  */}
//                         {/* ============================================================== */}
//                         {/* ============================================================== */}
//                         {/* Page wrapper  */}
//                         {/* ============================================================== */}
//                         <div className="page-wrapper">
//                             {/* ============================================================== */}
//                             {/* Container fluid  */}
//                             {/* ============================================================== */}
//                             <div className="container-fluid">
//                                 {/* ============================================================== */}
//                                 {/* Bread crumb and right sidebar toggle */}
//                                 {/* ============================================================== */}
//                                 {/* <Breadcrumb></Breadcrumb> */}
//                                 {/* ============================================================== */}
//                                 {/* End Bread crumb and right sidebar toggle */}
//                                 {/* ============================================================== */}
//                                 {/* ============================================================== */}
//                                 {/* Start Page Content */}
//                                 {/* ============================================================== */}
//                                 {/* <Home></Home> */}
//                                 {/* <button onClick={() => this.setState({ number: 2 })}>aaaaa</button> */}
//                                 <Switch>
//                                     {_(ROUTER)
//                                         .chain()
//                                         .keys()
//                                         // .filter(path => navigation[path])
//                                         .map(path => (
//                                             <Route
//                                                 exact
//                                                 key={path}
//                                                 path={path}
//                                                 render={() => {
//                                                     if (localStorage.getItem('dataUser'))
//                                                         return <Redirect to="/home"></Redirect>;
//                                                     const {
//                                                         title,
//                                                         Component,
//                                                     } = ROUTER[path];
//                                                     document.title = title;

//                                                     return (
//                                                         <React.Fragment>
//                                                             <Component />
//                                                         </React.Fragment>
//                                                     );
//                                                 }}
//                                             />
//                                         ))
//                                         .value()}
//                                 </Switch>

//                                 {/* ============================================================== */}
//                                 {/* End PAge Content */}
//                                 {/* ============================================================== */}
//                                 {/* ============================================================== */}
//                             </div>
//                             {/* ============================================================== */}
//                             {/* End Container fluid  */}
//                             {/* ============================================================== */}
//                             {/* ============================================================== */}
//                             {/* footer */}
//                             {/* ============================================================== */}
//                             <footer className="footer"> © Design by ST Team</footer>
//                             {/* ============================================================== */}
//                             {/* End footer */}
//                             {/* ============================================================== */}
//                         </div>
//                         {/* ============================================================== */}
//                         {/* End Page wrapper  */}
//                         {/* ============================================================== */}
//                     </div>
//                     {/* ============================================================== */}
//                     {/* End Wrapper */}
//                     {/* ============================================================== */}


                // </React.Fragment>
//             // </Router>


const ROUTER = {
    "/": {
        title: "Home",
        Component: Load.Home,
    },
    "/home": {
        title: "Home",
        Component: Load.Home,

    },
    "/user": {
        title: "User",
        Component: Load.Boss
    },
    "/shop": {
        title: "Shop",
        Component: Load.Shop
    },
    "/system": {
        title: "System",
        Component: Load.System
    },
    "/drink": {
        title: "Drink",
        Component: Load.Drink
    },
    "/invoice": {
        title: "Invoice",
        Component: Load.Invoice
    },
    "/position": {
        title: "Position",
        Component: Load.Position
    },
    "/staff": {
        title: "Staff",
        Component: Load.Staff
    },
    "/shops": {
        title: "Shops",
        Component: Load.Shops
    },
    "/invoicecs/1": {
        title: "Invoice",
        Component: Load.InvoiceCustomer
    },
     "/invoicecs/2": {
        title: "Invoice",
        Component: Load.InvoiceCustomer
    },
     "/invoicecs/3": {
        title: "Invoice",
        Component: Load.InvoiceCustomer
    },
     "/invoicecs/4": {
        title: "Invoice",
        Component: Load.InvoiceCustomer
    },
     "/invoicecs/5": {
        title: "Invoice",
        Component: Load.InvoiceCustomer
    },
     "/invoicecs/6": {
        title: "Invoice",
        Component: Load.InvoiceCustomer
    },
     "/invoicecs/7": {
        title: "Invoice",
        Component: Load.InvoiceCustomer
    },
     "/invoicecs/8": {
        title: "Invoice",
        Component: Load.InvoiceCustomer
    },
     "/invoicecs/9": {
        title: "Invoice",
        Component: Load.InvoiceCustomer
    },
     "/invoicecs/10": {
        title: "Invoice",
        Component: Load.InvoiceCustomer
    },
    "/invoicecs": {
        title: "Invoice",
        Component: Load.InvoiceCustomer
    }
};

function Main({ location }) {
    return (!localStorage.getItem('dataUser')) ? (
        <Redirect
            to={{
                pathname: "/login",
                state: { page: location.pathname }
            }}
        />
    ) : (
            <React.Fragment>
                    {/* ============================================================== */}
                    {/* Main wrapper - style you can find in pages.scss */}
                    {/* ============================================================== */}
                    <div id="main-wrapper">
                        
                        {/* ============================================================== */}
                        {/* Topbar header - style you can find in pages.scss */}
                        {/* ============================================================== */}
                        <Header ></Header>
                        {/* ============================================================== */}
                        {/* End Topbar header */}
                        {/* ============================================================== */}
                        {/* ============================================================== */}
                        {/* Left Sidebar - style you can find in sidebar.scss  */}
                        {/* ============================================================== */}
                        <Sidebar></Sidebar>
                        {/* ============================================================== */}
                        {/* End Left Sidebar - style you can find in sidebar.scss  */}
                        {/* ============================================================== */}
                        {/* ============================================================== */}
                        {/* Page wrapper  */}
                        {/* ============================================================== */}
                        <div className="page-wrapper">
                            {/* ============================================================== */}
                            {/* Container fluid  */}
                            {/* ============================================================== */}
                            <div className="container-fluid">
                                {/* ============================================================== */}
                                {/* Bread crumb and right sidebar toggle */}
                                {/* ============================================================== */}
                                {/* <Breadcrumb></Breadcrumb> */}
                                {/* ============================================================== */}
                                {/* End Bread crumb and right sidebar toggle */}
                                {/* ============================================================== */}
                                {/* ============================================================== */}
                                {/* Start Page Content */}
                                {/* ============================================================== */}
                                {/* <Home></Home> */}
                                {/* <button onClick={() => this.setState({ number: 2 })}>aaaaa</button> */}
                                <Switch>
                                    {_(ROUTER)
                                        .chain()
                                        .keys()
                                        // .filter(path => navigation[path])
                                        .map(path => (
                                            <Route
                                                exact
                                                key={path}
                                                path={path}
                                                render={() => {
                                                    // if (localStorage.getItem('dataUser'))
                                                    //     return <Redirect to="/home"></Redirect>;
                                                    const {
                                                        title,
                                                        Component,
                                                    } = ROUTER[path];
                                                    document.title = title;

                                                    return (
                                                        <React.Fragment>
                                                            <Component />
                                                        </React.Fragment>
                                                    );
                                                }}
                                            />
                                        ))
                                        .value()}
                                </Switch>

                                {/* ============================================================== */}
                                {/* End PAge Content */}
                                {/* ============================================================== */}
                                {/* ============================================================== */}
                            </div>
                            {/* ============================================================== */}
                            {/* End Container fluid  */}
                            {/* ============================================================== */}
                            {/* ============================================================== */}
                            {/* footer */}
                            {/* ============================================================== */}
                            <footer className="footer"> © Design by ST Team</footer>
                            {/* ============================================================== */}
                            {/* End footer */}
                            {/* ============================================================== */}
                        </div>
                        {/* ============================================================== */}
                        {/* End Page wrapper  */}
                        {/* ============================================================== */}
                    </div>
                    {/* ============================================================== */}
                    {/* End Wrapper */}
                    {/* ============================================================== */}


                </React.Fragment>
        );
}

export default withRouter(Main);