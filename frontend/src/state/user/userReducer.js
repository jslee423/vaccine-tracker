import * as actionTypes from '../actionTypes'

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    DOB: "",
    Gender: "",
    userType: "",
    adminCode: "",
    approved: "",
    approvalList: []
}

const userReducer = (state = initialState, action) => {
    console.log("reducer state: ", state)
    console.log("reducer action: ", action)
    switch (action.type) {
        case actionTypes.ADD_USER_TO_STORE:
            const newState = action.payload
            return {
                // ...state,
                // user: action.payload
                ...newState
            }
        case actionTypes.ADD_APPROVAL_LIST:
            return {
                ...state,
                approvalList: action.payload
            }
        default:
            return state
    }
}

export default userReducer