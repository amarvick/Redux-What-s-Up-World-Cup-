export function fetchUser() {
    return {
        type: "FETCH_USER_SUCCESS",
        payload: {
            username: '@AlexMarvick',
            name: 'Alex',
        }
    }
}

export function setUserUsername(username) {
    return {
        type: 'SET_USER_USERNAME',
        payload: username,
    }
}

export function setUserName(name) {
    return {
        type: 'SET_USER_NAME',
        payload: name,
    }
}