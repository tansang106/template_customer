import * as Types from '../Constants/ActionType';
var initialState = [];

var findIndex = (systems, id) => {
    var result = -1;
    systems.forEach((system, index) => {
        if (system.system_id === id) {
            result = index;
        }
    });
    return result;
}

const systems = (state = initialState, action) => {
    var index = -1;
    var { system } = action
    console.log(action)
    switch (action.type) {
        case Types.FETCH_SYSTEM:
            state = action.systems
            return [...state];
        case Types.ADD_SYSTEM:
            state.push(action.system)
            return [...state]
        case Types.UPDATE_SYSTEM:
            index = findIndex(state, system.system_id)
            state[index] = action.system
            return [...state]
        default:
            return [...state]
    }
}

export default systems;