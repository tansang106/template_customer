import * as Types from '../Constants/ActionType';

var initialState = [];



const dataLogin = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_LOGIN:
            state = action.dataLogin;   
            console.log('state login', state)
            return [...state]    
        default:
            return [...state]
    }
}

export default dataLogin;