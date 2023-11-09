import * as actionTypes from '../actionTypes'

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    DOB: "",
    Gender: "",
    userType: "",
    adminCode: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_USER_TO_STORE:
            const newState = action.payload
            return {
                // ...state,
                // user: action.payload
                ...newState
            }
        default:
            return state
    }
}

export default userReducer