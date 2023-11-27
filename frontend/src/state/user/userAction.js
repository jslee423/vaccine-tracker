import * as actionTypes from '../actionTypes'
import axios from 'axios'

export const ADD_USER_TO_STORE = (newUser) => {
    return {
        type: actionTypes.ADD_USER_TO_STORE,
        payload: newUser
    }
}

export const SAVE_USER_TO_DB = (user, navigate, setError) => {
    return (dispatch) => {
        axios.post('http://localhost:9000/user/signup', user)
        .then((response) => {
            const signedUser = response.data
            if (signedUser.userType === "admin") {
                dispatch(ADD_USER_TO_STORE(signedUser))
                navigate('/')
            } else {
                navigate('/loginSignup/signup-success')
            }
        })
        .catch((error) => {
            console.log("error saving user to db: ", error)
            setError(error.response.data)
        })
    }
}

export const LOGIN_USER = (email, password, navigate, setError) => {
    return(dispatch) => {
        axios.post('http://localhost:9000/user/login', {email: email, password: password})
        .then((response) => {
            const signedUser = response.data
            dispatch(ADD_USER_TO_STORE(signedUser))
            navigate('/')
        })
        .catch((error) => {
            console.log("error during login: ", error)
            setError(error.response.data)
        })
    }
}

export const ADD_APPROVAL_LIST = (users) => {
    console.log("add approval list action", users)
    return {
        type: actionTypes.ADD_APPROVAL_LIST,
        payload: users
    }
}

export const GET_UNAPPROVED_USERS = () => {
    return(dispatch) => {
        axios.post('http://localhost:9000/user/getusers', {})
        .then((response) => {
            console.log("get user response: ", response.data)
            dispatch(ADD_APPROVAL_LIST(response.data))
        })
        .catch((error) => {
            console.log("error retrieving users")
        })
    }
}
