import * as Types from '../Constants/ActionType';
import * as dataStorage from '../Constants/localStorage';
var initialState = [];

var findIndex = (staffs, id) => {
    var result = -1;
    staffs.forEach((staff, index) => {
        if (staff.user_id === id) {
            result = index;
        }
    });
    return result;
}

const staffs = (state = initialState, action) => {
    var index = -1;
    // console.log('action trong staff reducer', action);
    // let dataToken = dataStorage.TOKEN
    // let dataUser = dataStorage.DATA_USER.user_user_id
    // console.log('lấy localstorage', dataToken);
    // console.log('lấy data từ local storage', dataUser)
    var { staff} = action
    console.log('log action.staff', action)
    switch (action.type) {
        case Types.FETCH_STAFF:
            state = action.staffs;
            return [...state];
        case Types.ADD_STAFF:
            state.push(staff)
            return [...state]
        case Types.UPDATE_STAFF:
            index = findIndex(state, staff.user_id)    
            state[index] = staff
            return [...state]
        default:
            return [...state]
    }
}

export default staffs;