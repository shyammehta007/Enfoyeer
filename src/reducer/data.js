import types from '../actions/types'
const initialState = {
    users: [],
    images: []
}
function dataReducer(state = {}, action) {
    if (typeof state === undefined) {
        return Object.assign({}, initialState)
    }
    switch (action.type) {
        case types.USER_DATA:
            return Object.assign({}, state, {
                ...state,
                users: action.payload
            })

        case types.USER_IMAGE:
            return Object.assign({}, state, {
                ...state,
                images: action.payload
            })
        default:
            return state
    }
}

export default dataReducer