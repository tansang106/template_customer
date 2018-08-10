import * as Types from '../Constants/ActionType';
import callApi from '../Utils/apiCaller';
import * as dataStorage from '../Constants/localStorage';
import toastr from 'toastr';
//Login
export const actFetchLogin = (dataLogin) => {
    return {
        type: Types.FETCH_LOGIN,
        dataLogin
    }
}

//Shop
export const actFetchShopRequest = () => {
    console.log('vào act shop')
    return (dispatch) => {
        return callApi('shops/get-list-name', 'GET', null, {
                'token': dataStorage.TOKEN
        }).then(res => {
            if (res.data.status == 'success') {
                dispatch(actFetchShop(res.data.shopname))
            } else {
                toastr.error(res.data.message, 'Error');
                return;
            }
            })
        }
    
}

export const actFetchShop = (shops) => {
    return {
        type: Types.FETCH_SHOP,
        shops
    }
}

export const actAddShopResquest = (shop) => {
    return dispatch => {
        return  callApi('shops/create', 'POST', shop , {
            'token': dataStorage.TOKEN     
        }).then(res => {
            console.log(res)
            if (res.data.status == 'success') {
            dispatch(actAddShop(res.data.shop))
            } else {
                toastr.error(res.data.message, 'Error');
                return;
            }
        })
    }
}

export const actAddShop = (shop) => {
    return {
        type: Types.ADD_SHOP,
        shop
    }
}

export const actUpdateShopResquest = (shop) => {
    return dispatch => {
        return callApi('shops/update', 'PUT', shop, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            if (res.data.status == 'success') {
                dispatch(actUpdateShop(res.data.shop))
            } else {
                toastr.error(res.data.message, 'Error');
                return;
            }
        })
    }
}

export const actUpdateShop = (shop) => {
    return {
        type: Types.UPDATE_SHOP,
        shop
    }
}

//System
export const actFetchSystemRequest = () => {
    return (dispatch) => {
        return callApi('systems/listsystem', 'GET', null, {
            'token': dataStorage.TOKEN
        }).then(res => {
            if (res.data.status == 'success') {
                dispatch(actFetchSystem(res.data.system))
            } else {
                toastr.error(res.data.message, 'Error');
                return;
            }
            })
        }
    
}

export const actFetchSystem = (systems) => {
    return {
        type: Types.FETCH_SYSTEM,
        systems
    }
}

export const actAddSystemResquest = (system) => {
    return dispatch => {
        return callApi('systems/create', 'POST', system, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            if (res.data.status == 'success') {
                dispatch(actAddSystem(res.data.system))
            } else {
                toastr.error(res.data.message, 'Error');
                return;
            }
        })
    }
}

export const actAddSystem = (system) => {
    return {
        type: Types.ADD_SYSTEM,
        system
    }
}

export const actUpdateSystemResquest = (system) => {
    return dispatch => {
        return callApi('systems/update', 'PUT', system, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            if (res.data.status == 'success') {
            dispatch(actUpdateSystem(res.data.system))
            } else {
                toastr.error(res.data.message, 'Error');
                return;
            }
        })
    }
}

export const actUpdateSystem = (system) => {
    return {
        type: Types.UPDATE_SYSTEM,
        system
    }
}

//User
export const actFetchAccountRequest = () => {
    console.log('vào act')
    return (dispatch) => {
        return callApi('users/listaccount', 'GET', null, {
            'token': dataStorage.TOKEN
        }).then(res => {
            if (res.data.status == 'success') {
            console.log(res)
                dispatch(actFetchAccount(res.data.account))
            } else {
                toastr.error(res.data.message, 'Error');
                return;
            }
        })
    }

}

export const actFetchAccount = (accounts) => {
    return {
        type: Types.FETCH_USER,
        accounts
    }
}

export const actAddUserResquest = (user) => {
    return dispatch => {
        return callApi('shops/create_boss', 'POST', user, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            if (res.data.status == 'success') {
                dispatch(actAddUser(res.data.boss))
            } else {
                toastr.error(res.data.message, 'Error', {
                    timeOut: 2000,
                    // closeButton: true,
                    showAnimation: 'shake',
                    hideAnimation: 'animated wobble'
                });
                return;
            }
            
        })
    }
}

export const actAddUser = (user) => {
    return {
        type: Types.ADD_USER,
        user
    }
}

export const actUpdateUserResquest = (system) => {
    return dispatch => {
        return callApi('user/update-profileBoss', 'PUT', system, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            if (res.data.status == 'success') {
                dispatch(actUpdateUser(res.data.boss))
            } else {
                toastr.error(res.data.message, 'Error');
                return;
            }
        })
    }
}

export const actUpdateUser = (boss) => {
    return {
        type: Types.UPDATE_USER,
        boss
    }
}

//Position
export const actFetchPositionRequest = () => {
    console.log('vao position')
    return (dispatch) => {
        return callApi('positions/list-position', 'POST', {
            position_shop_id: dataStorage.DATA_USER.user_shop_id
        } , {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log('res postion', res)
            if (res.data.status == 'success') {
            dispatch(actFetchPosition(res.data.position))
            } else {
                toastr.error(res.data.message, 'Error');
                return;
            }
        })
    }
}

export const actFetchPosition = (positions) => {
    return {
        type: Types.FETCH_POSITION,
        positions
    }
}

export const actAddPositionResquest = (position) => {
    return dispatch => {
        return callApi('positions/create', 'POST', position, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            if (res.data.status == 'success') {
                dispatch(actAddPosition(res.data.positions))
            } else {
                toastr.error(res.data.message, 'Error');
                return;
            }
        })
    }
}

export const actAddPosition = (position) => {
    return {
        type: Types.ADD_POSITION,
        position
    }
}
//
export const actUpdatePositionResquest = (position) => {
    return dispatch => {
        return callApi('positions/update', 'PUT', position, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log('update api position')
            if (res.data.status == 'success') {
            dispatch(actUpdatePosition(res.data.position))
            } else {
                toastr.error(res.data.message, 'Error');
                return;
            }
        })
    }
}

export const actUpdatePosition = (position) => {
    return {
        type: Types.UPDATE_POSITION,
        position
    }
}

//Staff
export const actFetchStaffRequest = () => {
    console.log('vào act')
    return (dispatch) => {
        return callApi('boss/get-listStaff', 'POST', {
            idShop: dataStorage.DATA_USER.user_shop_id
        }, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            if (res.data.status == 'success') {
                dispatch(actFetchStaff(res.data.staffs))
            } else {
                toastr.error(res.data.message, 'Error');
                return;
            }
        })
    }

}

export const actFetchStaff = (staffs) => {
    return {
        type: Types.FETCH_STAFF,
        staffs
    }
}


export const actAddStaffResquest = (staff) => {
    return dispatch => {
        return callApi('boss/create', 'POST', staff, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            if (res.data.status == 'success') {
            dispatch(actAddStaff(res.data.user))
            } else {
                toastr.error(res.data.message, 'Error');
                return;
            }
        })
    }
}


export const actAddStaff = (staff) => {
    return {
        type: Types.ADD_STAFF,
        staff
    }
}


export const actUpdateStaffResquest = (staff) => {
    return dispatch => {
        return callApi('boss/update-staff', 'PUT', staff, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            if (res.data.status == 'success') {
                dispatch(actUpdateStaff(res.data.staff))
            } else {
                toastr.error(res.data.message, 'Error');
                return;
            }
        })
    }
}

export const actUpdateStaff = (staff) => {
    return {
        type: Types.UPDATE_STAFF,
        staff
    }
}

//Drink
export const actFetchDrinkRequest = () => {
    console.log('vào act')
    return (dispatch) => {
        return callApi('drinks/get', 'POST', {
            drink_shop_id: dataStorage.DATA_USER.user_shop_id
        }, {
                'token': dataStorage.TOKEN
            }).then(res => {
                console.log(res)
                if (res.data.status == 'success') {
                dispatch(actFetchDrink(res.data.drinks))
            } else {
                toastr.error(res.data.message, 'Error');
                return;
            }
            })
    }

}

export const actFetchDrink = (drinks) => {
    return {
        type: Types.FETCH_DRINK,
        drinks
    }
}


export const actAddDrinkResquest = (drink) => {
    console.log('drink bên index', drink)
    return dispatch => {
        return callApi('drinks/create', 'POST', drink, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            if (res.data.status == 'success') {
                dispatch(actAddDrink(res.data.drink))
            } else {
                toastr.error(res.data.message, 'Error');
                return;
            }
        })
    }
}


export const actAddDrink = (drink) => {
    return {
        type: Types.ADD_DRINK,
        drink
    }
}


export const actUpdateDrinkResquest = (drink) => {
    return dispatch => {
        return callApi('drinks/update-drink', 'PUT', drink, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            if (res.data.status == 'success') {
            dispatch(actUpdateDrink(res.data.drink))
            } else {
                toastr.error(res.data.message, 'Error');
                return;
            }
        })
    }
}

export const actUpdateDrink = (drink) => {
    return {
        type: Types.UPDATE_DRINK,
        drink
    }
}


//Cart
export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,   //product : product
        quantity,  //quantity : quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: Types.CHANGE_MESSAGE,
        message, // message : message
    }
}

export const actDeleteProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product,
    }
}

export const actUpdateProductInCart = (product, quantity) => {
    return {
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity,
    }
}

export const clearCart = () => {
    return {
        type: Types.CLEAR_CART
    }
}

//Bill
export const createBill = (bill) => {
    callApi('bills/create', 'POST', bill, {
        'token': dataStorage.TOKEN
    }).then(res => {
        console.log('res', res)
        return res;
    })
}

export const actGetBillAmountRequest = () => {
    return dispatch => {
        return callApi('bills/countBillInvoice', 'POST', {
            idShop: dataStorage.DATA_USER.user_shop_id
        }, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            try {
                if (res.data.status == 'success') {
                dispatch(actBillAmount(res.data.bill))
            } else {
                toastr.error(res.data.message, 'Error');
                return;
            }
            } catch (ex) {
                console.log(ex)
            }
            
        })
    }
}

export const actBillAmount = (data) => {
    return {
        type: Types.GET_BILL_AMOUNT,
        data
    }
}

//Cart customer
export const actAddToCartCustomer = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART_CUSTOMER,
        product,   //product : product
        quantity,  //quantity : quantity
    }
}

export const actChangeMessageCustomer = (message) => {
    return {
        type: Types.CHANGE_MESSAGE,
        message, // message : message
    }
}

export const actDeleteProductInCartCustomer = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART_CUSTOMER,
        product,
    }
}

export const actUpdateProductInCartCustomer = (product, quantity) => {
    return {
        type: Types.UPDATE_PRODUCT_IN_CART_CUSTOMER,
        product,
        quantity,
    }
}

export const clearCartCustomer = () => {
    return {
        type: Types.CLEAR_CART_CUSTOMER
    }
}

export const actFetchDrinkRequestCustomer = (id) => {
    console.log('vào act')
    return (dispatch) => {
        return callApi('drinks/get', 'POST', {
            drink_shop_id: id
        }, {
                'token': dataStorage.TOKEN
            }).then(res => {
                console.log('res từ customer', res)
                if (res.data.status == 'success') {
                    dispatch(actFetchDrinkCustomer(res.data.drinks))
                } else {
                    toastr.error(res.data.message, 'Error');
                    return;
                }
            })
    }

}

export const actFetchDrinkCustomer = (drinks) => {
    return {
        type: Types.FETCH_DRINK,
        drinks
    }
}