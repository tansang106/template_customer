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

const ROUTER = {
    "/": {
        title: "Home",
        Component: Load.Home,
    },
    "/home" : {
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
    }
};

export default ROUTER;