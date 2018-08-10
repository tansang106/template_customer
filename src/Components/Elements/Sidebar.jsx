import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import App from '../../App';
import * as dataStorage from "../../Constants/localStorage";
import * as Config from '../../Constants/Config';

const MenuLink = ({ label, to, activeOnlyWhenExact, iClass, spanClass, classN }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                <li className={`${active}`}>
                    <Link to={to} aria-expanded="false" >
                        <i className={iClass}></i><span className={spanClass}>{label}</span>
                    </Link>
                </li>
            )
        }} />
    )
}

// const MenuLink2 = ({ label, to, activeOnlyWhenExact, iClass, spanClass }) => {
//     return (
//         <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
//             var active = match ? 'active' : '';
//             return (
//                 <Link to={to} aria-expanded="false">
//                     <i className={iClass}></i><span className={spanClass}>{label}</span>
//                 </Link>
//             )
//         }} />
//     )
// }


class Sidebar extends Component {

    // showIndex = (admin, boss, staff, permission) => {
    //     if (permission == 'admin') {
    //        return admin 
    //     } else if (permission == 'boss') {
    //        return boss
    //     } else {
    //         return staff
    //     }
    // }

    constructor(props, context) {
        super(props, context);
        this.state = {
            per: dataStorage.DATA_USER.user_permission || null,
            updated: this.props.updated
        };
    }

    // load = () =>  {
    //     this.setState({ updated: true})
    // }

    

    render() {
        console.log(this.state.per)
        console.log('prop từ appjs', this.props.updated)
        var permision = dataStorage.DATA_USER.user_permission;
        let img = dataStorage.DATA_USER.user_avatar;
        let userName = dataStorage.DATA_USER.user_name;
        let sourceImg;
        if (permision = 'boss' || 'admin') {
            sourceImg = 'imgBoss'
        } else {
            sourceImg = 'imgStaff'
        }

        let userProfile = (
            <div className="user-profile user_background">
                {/* <div className="profile-img"> <img src="../assets/images/users/profile.png" alt="user" /> </div> */}
                <div className="profile-img"> <img src={`${Config.API_URL}/uploads/${sourceImg}/${img}`} />
                </div>
                <div className="profile-text"> <a href="#" className="dropdown-toggle u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">{userName}</a>
                    <div className="dropdown-menu animated flipInY">
                        <Link to="/login" className="dropdown-item"><i className="ti-user"></i> My Profile</Link>
                        <a href="#" className="dropdown-item"><i className="ti-wallet"></i> My Balance</a>
                        <a href="#" className="dropdown-item"><i className="ti-email"></i> Inbox</a>
                        <div className="dropdown-divider"></div> <a href="#" className="dropdown-item"><i className="ti-settings"></i> Account Setting</a>
                        <div className="dropdown-divider"></div> <a href="login.html" className="dropdown-item"><i className="fa fa-power-off"></i> Logout</a>
                    </div>
                </div>
            </div>
        )

        // day la cua chung
        let Home = (this.state.per == 'boss') ? 
            (
            <MenuLink label="Home" to="/home" activeOnlyWhenExact={true} iClass="fa fa-home" spanClass="hide-menu">
            </MenuLink>
        ) : '';

        // day la cua boss
        let Shop = (this.state.per == 'boss') ? (
            <MenuLink label="Shop" to="/shop" iClass="fa fa-cube" spanClass="hide-menu">
            </MenuLink>
        ) : '';

        // let Drink = (
        //     <MenuLink label="Drink" to="/drink" iClass="fa fa-circle" spanClass="hide-menu">
        //     </MenuLink>
        // )

        let Drink = (this.state.per == 'boss') ? (
            <MenuLink label="Drink" to="/drink" iClass="fa fa-coffee" spanClass="hide-menu">
            </MenuLink>
        ) : '';


        // let Staff = (
        //     <li>
        //         <Link className="has-arrow " to="/coffeeshop" aria-expanded="false"><i className="mdi mdi-map-marker"></i><span className="hide-menu">Users</span></Link>
        //         <ul aria-expanded="false" className="collapse">
        //             <li><Link to="/staff">List Staff</Link></li>
        //             <li><Link to="/position">List Position</Link></li>
        //         </ul>
        //     </li>
        // )


        let Staff = (this.state.per == 'boss') ? (
            <li>
                <Link className="has-arrow " to="/coffeeshop" aria-expanded="false"><i className="fa fa-users"></i><span className="hide-menu">Users</span></Link>
                <ul aria-expanded="false" className="collapse">
                    <li><Link to="/staff">List Staff</Link></li>
                    <li><Link to="/position">List Position</Link></li>
                </ul>
            </li>
        ) : '';

        // day la cua admin
        // let ShopSystem = (
        //     <li>
        //         <Link className="has-arrow " to="/coffeeshop" aria-expanded="false"><i className="mdi mdi-map-marker"></i><span className="hide-menu">Shop & System</span></Link>
        //         <ul aria-expanded="false" className="collapse">
        //             <li><Link to="/coffeeshop">List Shop</Link></li>
        //             <li><Link to="/coffeesystem">List System</Link></li>
        //         </ul>
        //     </li>
        // )

        let ShopSystem = (this.state.per == 'admin') ? (
            <li>
                <Link className="has-arrow " to="/coffeeshop" aria-expanded="false"><i className="fa fa-university"></i><span className="hide-menu">Shop & System</span></Link>
                <ul aria-expanded="false" className="collapse">
                    <li><Link to="/shop">List Shop</Link></li>
                    <li><Link to="/system">List System</Link></li>
                </ul>
            </li>
        ) : '';

        // let User = (
        //         <MenuLink label="User" to="/user" iClass="fa fa-circle" spanClass="hide-menu">
        //                     </MenuLink>
        // )

        let User = (this.state.per == 'admin') ? (
            <MenuLink label="User" to="/user" iClass="fa fa-user" spanClass="hide-menu">
            </MenuLink>
        ) : '';

        // day la cua staff va boss
        // let Counter = (
        //     <MenuLink label="Counter" to="/invoice" iClass="fa fa-circle" spanClass="hide-menu">
        //     </MenuLink>
        // )

        let Counter = (this.state.per == 'staff' || this.state.per == 'boss') ? (
            <MenuLink label="Counter" to="/invoice" iClass="fa fa-shopping-cart" spanClass="hide-menu">
            </MenuLink>
        ) : '';

        let admin = (
            { Home },
            { ShopSystem },
            { User }
        )
        
        // let boss = (
        //     { Home },
        //     { Shop },
        //     { Drink },
        //     { Staff },
        //     { Counter }
        // )

        let boss = (this.state.per == 'boss') ? (
            { Home },
            { Shop },
            { Drink },
            { Staff },
            { Counter }
        ) : '';

        // let staff = (
        //     { Home },
        //     { Counter }
        // )

        let staff = (this.permision = 'staff') ? (
            { Home },
            { Counter }
        ) : ''

        // let index = null;
        // if (this.permission == 'admin') {
        //     index = {admin}
        // } else if (this.permission == 'boss') {
        //     index = {admin}
        // } else {
        //     index = {staff}
        // }
        // console.log(index)
    
        console.log(permision)
    
        return (
            <aside className="left-sidebar">
                {/* Sidebar scroll*/}
                <div className="scroll-sidebar">
                    {/* User profile */}
                    {/* <div className="user-profile" style="background: url(../assets/images/background/user-info.jpg) no-repeat;"> */}
                    {userProfile}
                    {/* {this.showProfile} */}
                    {/* End User profile text*/}
                    {/* Sidebar navigation*/}
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li className="nav-small-cap">USER</li>
                            {/* <li>
                                            <Link exact to="/"  aria-expanded="false"><i className="fa fa-circle"></i><span className="hide-menu">Home</span></Link>
                                        </li> */}
                            {/* {this.showIndex(admin, boss, staff, this.permision)} */}
                            {Home}
                            {Shop}
                            {Drink}
                            {Staff}
                            {ShopSystem}
                            {User}
                            {Counter}
                            {/* {staff} */}
                            {/* Menu Level 3  con xai */}
                            {/* <li>
                                <a className="has-arrow " href="#" aria-expanded="false"><i className="mdi mdi-arrange-send-backward"></i><span className="hide-menu">Multi level dd</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><Link to="/invoice">Counter</Link></li>
                                    <li><Link to="/coffeedetail">item 1.2</Link></li>
                                    <li>
                                        <a className="has-arrow" href="#" aria-expanded="false">Menu 1.3</a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li><Link to="/coffeeshop">item 1.3.1</Link></li>
                                            <li><Link to="/coffeedetail">item 1.3.2</Link></li>
                                            <li><Link to="/coffeegrid">item 1.3.3</Link></li>
                                            <li><Link to="/coffeedetail">item 1.3.4</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/coffeegrid">item 1.4</Link></li>
                                </ul>
                            </li> */}
                            {/* End Menu Level 3 */}


                        </ul>
                    </nav>
                    {/* End Sidebar navigation */}
                </div>
                {/* End Sidebar scroll*/}
                {/* Khi vào / thì load component nào */}
                {/* <Route path="/" exact component={App} />
                            <Route path="/CoffeeShop" component={CoffeeShop} /> */}
            </aside>

        )
    }
}

export default Sidebar;