import * as Types from '../Constants/ActionType';
import * as dataStorage from '../Constants/localStorage';
var initialState = {}


const bill = (state = initialState, action) => {
    // console.log('action trong shop reducer', action);
    // let dataToken = dataStorage.TOKEN
    // let dataUser = dataStorage.DATA_USER.user_shop_id
    // console.log('lấy localstorage', dataToken);
    // console.log('lấy data từ local storage', dataUser)
    // var { bill } = action
    console.log('log bill', action.data)
    switch (action.type) {
        case Types.GET_BILL_AMOUNT:
            state.push(action.data);
            console.log('state trong bill', state)
            return [...state];
        // case Types.ADD_SHOP:
        //     state.push(shop)
        //     return [...state]
        // case Types.UPDATE_SHOP:
        //     index = findIndex(state, shop.shop_id)
        //     state[index] = shop
        //     return [...state]
        default:
            return [...state]
    }
}

export default bill;