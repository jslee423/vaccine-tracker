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
            dispatch(ADD_USER_TO_STORE(signedUser))
            navigate('/')
        })
        .catch((error) => {
            console.log("error saving user to db: ", error)
            setError(error.response.data)
        })
    }
}