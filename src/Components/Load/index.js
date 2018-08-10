import Loadable from "react-loadable";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const [Home] = [
    () => import("../Home/Home").then(module => module.default)
].map(item =>
    Loadable({
        loader: item,
        loading: () => null,
        // render: loaded => React.createElement(loaded.default)

    })
);

const [
    Boss,
    Shop,
    System,
    Drink,
    Invoice,
    Position,
    Staff,
    Shops,
    InvoiceCustomer
] = [
    
    () => import( "../Boss/BossList"),
    () => import("../CoffeeShop/CoffeeShopList"),
    () => import( "../CoffeeSystem/CoffeeSystemList"),
    () => import( "../Drink/DrinkList"),
    () => import("../Invoice/Invoice"),
    () => import( "../Position/PositionList"),
    () => import("../Staff/StaffList"),
    () => import("../CoffeeShop/CoffeeShopGrid"),
    () => import("../InvoiceCustomer/InvoiceCustomer")
    
 
].map(item =>
    Loadable({
        loader: item,
        loading: () => null,
        render: loaded =>
            React.createElement(
                withRouter(loaded.default)
            )
    })
);

export const Load = {
    Home,
    Boss,
    Shop,
    System,
    Drink,
    Invoice,
    Position,
    Staff,
    Shops,
    InvoiceCustomer
};
