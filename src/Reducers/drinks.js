import * as Types from '../Constants/ActionType';
import * as dataStorage from '../Constants/localStorage';
var initialState = [];

var findIndex = (drinks, id) => {
    var result = -1;
    drinks.forEach((drink, index) => {
        if (drink.drink_id === id) {
            result = index;
        }
    });
    return result;
}

const drinks = (state = initialState, action) => {
    var index = -1;
    // console.log('action trong staff reducer', action);
    // let dataToken = dataStorage.TOKEN
    // let dataUser = dataStorage.DATA_USER.user_user_id
    // console.log('lấy localstorage', dataToken);
    // console.log('lấy data từ local storage', dataUser)
    var { drink } = action
    console.log('log action.drink', action)
    switch (action.type) {
        case Types.FETCH_DRINK:
            state = action.drinks;
            return [...state];
        case Types.ADD_DRINK:
            state.push(drink)
            return [...state]
        case Types.UPDATE_DRINK:
            index = findIndex(state, drink.drink_id)
            console.log(index)
            state[index] = drink
            return [...state]
        default:
            return [...state]
    }
}

export default drinks;