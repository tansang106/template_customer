import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import App from '../../App';

class Sidebar extends Component {
    render() {
        return (

            <aside className="left-sidebar">
                {/* Sidebar scroll*/}
                <div className="scroll-sidebar">
                    {/* User profile */}
                    {/* <div classNameName="user-profile" style="background: url(../assets/images/background/user-info.jpg) no-repeat;"> */}
                    <div classNameName="user-profile user_background">
                        {/* User profile image */}
                        <div className="profile-img"> <img src="../assets/images/users/1.jpg" alt="user" /> </div>
                        {/* User profile text*/}
                        <div className="profile-text"> <a href="#" className="dropdown-toggle link u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">Markarn Doe <span className="caret"></span></a>
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
                            <li>
                                <NavLink to="/" aria-expanded="false"><i className="fa fa-circle"></i><span className="hide-menu">Home</span></NavLink>
                            </li>
                            <li>
                                <NavLink className="has-arrow " to="/coffeeshop" aria-expanded="false"><i className="mdi mdi-map-marker"></i><span className="hide-menu">Coffee Shop</span></NavLink>
                                <ul aria-expanded="false" className="collapse">
                                    <li><NavLink to="/coffeegrid">List Shop</NavLink></li>
                                    <li><NavLink to="/coffeedetail">Vector Maps</NavLink></li>
                                </ul>
                            </li>
                            <li>
                                <a className="has-arrow " href="#" aria-expanded="false"><i className="mdi mdi-arrange-send-backward"></i><span className="hide-menu">Multi level dd</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><NavLink to="/coffeegrid">item 1.1</NavLink></li>
                                    <li><NavLink to="/coffeedetail">item 1.2</NavLink></li>
                                    <li>
                                        <a className="has-arrow" href="#" aria-expanded="false">Menu 1.3</a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li><NavLink to="/coffeegrid">item 1.3.1</NavLink></li>
                                            <li><NavLink to="/coffeedetail">item 1.3.2</NavLink></li>
                                            <li><NavLink to="/coffeegrid">item 1.3.3</NavLink></li>
                                            <li><NavLink to="/coffeedetail">item 1.3.4</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to="/coffeegrid">item 1.4</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    {/* End Sidebar navigation */}
                </div >
                {/* End Sidebar scroll*/}
                {/* Bottom points*/}
                <div className="sidebar-footer">
                    {/* item*/}
                    <a href="" className="link" data-toggle="tooltip" title="Settings"><i className="ti-settings"></i></a>
                    {/* item*/}
                    <a href="" className="link" data-toggle="tooltip" title="Email"><i className="mdi mdi-gmail"></i></a>
                    {/* item*/}
                    <a href="" className="link" data-toggle="tooltip" title="Logout"><i className="mdi mdi-power"></i></a>
                </div>
                {/* End Bottom points*/}
            </aside >

        )
    }
}

export default Sidebar;