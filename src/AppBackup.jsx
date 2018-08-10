import React, { Component } from 'react';
import Header from './Components/Elements/Header';
import Sidebar from './Components/Elements/Sidebar';
import Breadcrumb from './Components/Elements/Breadcrumb';
import EmployeeList from './Components/Employee/EmployeeList';
import { BrowserRouter as Router, Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';
import CoffeeShopList from './Components/CoffeeShop/CoffeeShopList';
import CoffeeShopGrid from './Components/CoffeeShop/CoffeeShopGrid';
import CoffeeShopDetail from './Components/CoffeeShop/CoffeeShopDetail';
import Invoice from './Components/Invoice/Invoice';
import NotFound from './Components/404/NotFound';
import routes from './routes';
import Login from './Components/Login/Login';
import Main from './Components/Main';
// import Employee from './Components/Employee';
// import $ from 'jquery';



class App extends Component {

    // showContentMenus = (routes) => {
    //     var result = null;
    //     if (routes.length > 0) {
    //         result = routes.map((route, index) => {
    //             console.log(route)
    //             return (
    //                 <Route
    //                     key={index}
    //                     path={route.path}
    //                     exact={route.exact}
    //                     component={route.main}
    //                 />
    //             );
    //             console.log(result);
    //         }
    //         )
    //     }
    //     return result;
    // }

    // constructor(props, context) {
    //     super(props, context);
    //     this.state = {
    //         isLogin: false()
    //     }
    // }
    

    render() {
        let render;
        if (localStorage.getItem("tokenUser") && localStorage.getItem("dataUser")) {
            // <Router>
                // return   <Main></Main> 
            // </Router>   
            // <Redirect to='/main'/>
            <Redirect to='/'/>
            // render = <Main></Main>
            // <Redirect to='/home'/>
            // render = <Redirect to='/'/>
        }
        else {
            // render = <Login></Login>
            <Redirect to='/login'/>
        }
        return (
            // <Router>
                // {render}
            <Main></Main>
                // {/* <Login/> */}
            // </Router>
        )
        
       
            // return (
        //     <Router>
        //         <Login ></Login>
        //         {/* <CoffeeShopGrid></CoffeeShopGrid> */}
        //         {/* <Main></Main> */}
        //     </Router>
        // );
    }

}

export default App;