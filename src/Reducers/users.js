import * as Types from '../Constants/ActionType';
import * as dataStorage from '../Constants/localStorage';
var initialState = [];

var findIndex = (users, id) => {
    var result = -1;
    users.forEach((user, index) => {
        if (user.user_id === id) {
            result = index;
        }
    });
    return result;
}

const users = (state = initialState, action) => {
    var index = -1;
    // console.log('action trong user reducer', action);
    // let dataToken = dataStorage.TOKEN
    // let dataUser = dataStorage.DATA_USER.user_user_id
    // console.log('lấy localstorage', dataToken);
    // console.log('lấy data từ local storage', dataUser)
    var { boss, user} = action
    console.log('log action.user', action)
    switch (action.type) {
        case Types.FETCH_USER:
            state = action.accounts;
            return [...state];
        case Types.ADD_USER:
            state.push(user)
            return [...state]
        case Types.UPDATE_USER:
            index = findIndex(state, boss.user_id)    
            state[index] = boss
            return [...state]
        default:
            return [...state]
    }
}

export default users;