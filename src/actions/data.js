import types from './types'

function setUserData(userData) {
    return {
        type: types.USER_DATA,
        payload: userData
    }
}

function setUserImage(userImage) {

    return {
        type: types.USER_IMAGE,
        payload: userImage
    }
}

export default { setUserData, setUserImage }