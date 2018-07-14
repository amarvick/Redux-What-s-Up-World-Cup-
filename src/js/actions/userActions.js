export function fetchUser() {
    return {
        type: "FETCH_USER_SUCCESS",
        payload: {
            default_profile_image: '',
            name: 'Alex',
        }
    }
}

export function setUserProfileImage(default_profile_image) {
    return {
        type: 'SET_USER_PROFILE_IMAGE',
        payload: default_profile_image,
    }
}

export function setUserName(name) {
    return {
        type: 'SET_USER_NAME',
        payload: name,
    }
}