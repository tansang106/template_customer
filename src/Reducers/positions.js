import * as Types from '../Constants/ActionType';
var initialState = [];

var findIndex = (positions, id) => {
    var result = -1;
    positions.forEach((position, index) => {
        if (position.position_id === id) {
            result = index;
        }
    });
    return result;
}

const positions = (state = initialState, action) => {
    var index = -1;
    var { position } = action
    console.log('action position')
    switch (action.type) {
        case Types.FETCH_POSITION:
            state = action.positions
            return [...state];
        case Types.ADD_POSITION:
            state.push(position)
            return [...state]
        case Types.UPDATE_POSITION:
            index = findIndex(state, position.position_id)
            state[index] = position
            return [...state]
        default:
            return [...state]
    }
}

export default positions;