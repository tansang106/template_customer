import React, { Component } from 'react';
import Header from './Components/Elements/Header';
import Sidebar from './Components/Elements/Sidebar';
import Breadcrumb from './Components/Elements/Breadcrumb';
import EmployeeList from './Components/Employee/EmployeeList';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import CoffeeShopList from './Components/CoffeeShop/CoffeeShopList';
import CoffeeShopGrid from './Components/CoffeeShop/CoffeeShopGrid';
import CoffeeShopDetail from './Components/CoffeeShop/CoffeeShopDetail';
import Invoice from './Components/Invoice/Invoice';
// import Employee from './Components/Employee';
// import $ from 'jquery';

const MenuLink = ({ label, to, activeOnlyWhenExact, iClass, spanClass, classN }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
            var active = match ? 'active' : '';
            return (
                <li className={active}>
                    <Link to={to} aria-expanded="false" className={classN}>
                        <i className={iClass}></i><span className={spanClass}>{label}</span>
                    </Link>
                </li>
            )
        }}/>
    )
}

const MenuLink2 = ({ label, to, activeOnlyWhenExact, iClass, spanClass }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                    <Link to={to} aria-expanded="false">
                        <i className={iClass}></i><span className={spanClass}>{label}</span>
                    </Link>
            )
        }} />
    )
}

class App extends Component {

    render() {

        return (
            <Router>
                <React.Fragment>

                    {/* ============================================================== */}
                    {/* Preloader - style you can find in spinners.css */}
                    {/* ============================================================== */}
                    <div className="preloader">
                        <svg className="circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" /> </svg>
                    </div>
                    {/* ============================================================== */}
                    {/* Main wrapper - style you can find in pages.scss */}
                    {/* ============================================================== */}
                    <div id="main-wrapper">
                        {/* ============================================================== */}
                        {/* Topbar header - style you can find in pages.scss */}
                        {/* ============================================================== */}
                        <Header></Header>
                        {/* ============================================================== */}
                        {/* End Topbar header */}
                        {/* ============================================================== */}
                        {/* ============================================================== */}
                        {/* Left Sidebar - style you can find in sidebar.scss  */}
                        {/* ============================================================== */}
                        <aside className="left-sidebar">
                            {/* Sidebar scroll*/}
                            <div className="scroll-sidebar">
                                {/* User profile */}
                                {/* <div className="user-profile" style="background: url(../assets/images/background/user-info.jpg) no-repeat;"> */}
                                <div className="user-profile user_background">
                                    {/* User profile image */}
                                    <div className="profile-img"> <img src="../assets/images/users/profile.png" alt="user" /> </div>
                                    {/* User profile text*/}
                                    <div className="profile-text"> <a href="#" className="dropdown-toggle u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">Markarn Doe</a>
                                        <div className="dropdown-menu animated flipInY">
                                            <a href="#" className="dropdown-item"><i className="ti-user"></i> My Profile</a>
                                            <a href="#" className="dropdown-item"><i className="ti-wallet"></i> My Balance</a>
                                            <a href="#" className="dropdown-item"><i className="ti-email"></i> Inbox</a>
                                            <div className="dropdown-divider"></div> <a href="#" className="dropdown-item"><i className="ti-settings"></i> Account Setting</a>
                                            <div className="dropdown-divider"></div> <a href="login.html" className="dropdown-item"><i className="fa fa-power-off"></i> Logout</a>
                                        </div>
                                    </div>
                                </div>
                                {/* End User profile text*/}
                                {/* Sidebar navigation*/}
                                <nav className="sidebar-nav">
                                    <ul id="sidebarnav">
                                        <li className="nav-small-cap">PERSONAL</li>
                                        {/* <li>
                                            <Link exact to="/"  aria-expanded="false"><i className="fa fa-circle"></i><span className="hide-menu">Home</span></Link>
                                        </li> */}
                                        <MenuLink label="Home" to="/" activeOnlyWhenExact={true} iClass="fa fa-circle" spanClass="hide-menu">
                                        </MenuLink>
                                        <li>
                                            <Link className="has-arrow " to="/coffeeshop" aria-expanded="false"><i className="mdi mdi-map-marker"></i><span className="hide-menu">Coffee Shop</span></Link>
                                            <ul aria-expanded="false" className="collapse">
                                                <li><Link activestyle={{
                                                    color: "white"
                                                }} to="/coffeegrid">List Shop</Link></li>
                                                <li><Link activeclassname="active" to="/coffeedetail">Vector Maps</Link></li>
                                            </ul>
                                        </li>
                                        {/* <MenuLink label="Coffee Shop" to="/coffeeshop" iClass="mdi mdi-map-marker" spanClass="hide-menu" classN="has-arrow">
                                            <ul aria-expanded="false" className="collapse">
                                                <li><Link activeStyle={{
                                                    color: "white"
                                                }} to="/coffeegrid">List Shop</Link></li>
                                                <li><Link activeClassName="active" to="/coffeedetail">Vector Maps</Link></li>
                                            </ul>
                                        </MenuLink> */}
                                        <li>
                                            <a className="has-arrow " href="#" aria-expanded="false"><i className="mdi mdi-arrange-send-backward"></i><span className="hide-menu">Multi level dd</span></a>
                                            <ul aria-expanded="false" className="collapse">
                                                <li><Link to="/invoice">Counter</Link></li>
                                                <li><Link to="/coffeedetail">item 1.2</Link></li>
                                                <li>
                                                    <a className="has-arrow" href="#" aria-expanded="false">Menu 1.3</a>
                                                    <ul aria-expanded="false" className="collapse">
                                                        <li><Link to="/coffeegrid">item 1.3.1</Link></li>
                                                        <li><Link to="/coffeedetail">item 1.3.2</Link></li>
                                                        <li><Link to="/coffeegrid">item 1.3.3</Link></li>
                                                        <li><Link to="/coffeedetail">item 1.3.4</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/coffeegrid">item 1.4</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                                {/* End Sidebar navigation */}
                            </div>
                            {/* End Sidebar scroll*/}
                            {/* Khi vào / thì load component nào */}
                            {/* <Route path="/" exact component={App} />
                            <Route path="/CoffeeShop" component={CoffeeShop} /> */}
                        </aside>
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
                                <Breadcrumb></Breadcrumb>
                                {/* ============================================================== */}
                                {/* End Bread crumb and right sidebar toggle */}
                                {/* ============================================================== */}
                                {/* ============================================================== */}
                                {/* Start Page Content */}
                                {/* ============================================================== */}
                                {/* <EmployeeList></EmployeeList> */}
                                <Route path="/" exact component={EmployeeList} />
                                <Route path="/coffeeshop" component={CoffeeShopList} />
                                <Route path="/coffeegrid" component={CoffeeShopGrid} />
                                <Route path="/coffeedetail" component={CoffeeShopDetail} />
                                <Route path="/invoice" component={Invoice}/>
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
            </Router>


        );
    }
}

export default App;