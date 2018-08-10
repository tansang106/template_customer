import * as Types from '../Constants/ActionType';
import * as dataStorage from '../Constants/localStorage';
var initialState = [];

var findIndex = (shops, id) => {
    var result = -1;
    shops.forEach((shop, index) => {
        if (shop.shop_id === id) {
            result = index;
        }
    });
    return result;
}

const shops = (state = initialState, action) => {
    var index = -1;
    // console.log('action trong shop reducer', action);
    // let dataToken = dataStorage.TOKEN
    // let dataUser = dataStorage.DATA_USER.user_shop_id
    // console.log('lấy localstorage', dataToken);
    // console.log('lấy data từ local storage', dataUser)
    var { shop } = action
    console.log('log action.shop', action)
    switch (action.type) {
        case Types.FETCH_SHOP:
            state = action.shops;
            return [...state];
        case Types.ADD_SHOP:
            state.push(shop)
            return [...state]
        case Types.UPDATE_SHOP:
            index = findIndex(state, shop.shop_id)    
            state[index] = shop
            return [...state]
        default:
            return [...state]
    }
}

export default shops;