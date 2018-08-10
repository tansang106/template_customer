import React, { Component } from 'react';
import CoffeeShopList from './Components/CoffeeShop/CoffeeShopList';
import CoffeeShopGrid from './Components/CoffeeShop/CoffeeShopGrid';
import CoffeeShopDetail from './Components/CoffeeShop/CoffeeShopDetail';
import Invoice from './Components/Invoice/Invoice';
import NotFound from './Components/404/NotFound';
import EmployeeList from './Components/Employee/EmployeeList';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Main from './Components/Main';
import CoffeeSystemList from './Components/CoffeeSystem/CoffeeSystemList';
import Boss from './Components/Boss/BossList';
import Staff from './Components/Staff/StaffList';
import Position from './Components/Position/PositionList';
import Drink from './Components/Drink/DrinkList';
import DinkContainer from './Containers/DrinkContainer';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />,
        
    },
    {
        path: '/main',
        exact: true,
        main: () => <Main />,

    },
    // {
    //     path: '/login',
    //     exact: true,
    //     main: () => <Login />,

    // },
    {
        path: '/home',
        exact: true,
        main: () => <Home />,

    },
    {
        path: '/coffeeshop',
        exact: false,
        main: () => <CoffeeShopList />
    },
    {
        path: '/coffeegrid',
        exact: false,
        main: ({match, location}) => <CoffeeShopGrid match={match} location={location}/>
    },
    {
        path: '/coffeedetail',
        exact: true,
        main: () => <CoffeeShopDetail />
    },
    {
        path: '/coffeesystem',
        exact: false,
        main: () => <CoffeeSystemList />
    },
    {
        path: '/user',
        exact: false,
        main: () => <Boss />
    },
    {
        path: '/staff',
        exact: false,
        main: () =>  <Staff />
    },
    {
        path: '/drink',
        exact: false,
        main: () => <Drink/>
    },
    {
        path: '/position',
        exact: false,
        main: () =>  <Position/>
    },
    {
        path: '/invoice',
        exact: false,
        main: ({location}) => <Invoice location={location}/>
    },
    {
        path: '/login',
        exact: false,
        main: ({location}) => <Login location={location}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    },
   
    
];

export default routes;