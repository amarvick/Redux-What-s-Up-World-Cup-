export default function reducer(state={
    fetching: false,
    fetched: false,
    user: {
        id: null,
        default_profile_image: null,
        name: null,
    },
    error: null,
}, action) {

    switch(action.type) {
        case "FETCH_USER": {
            return {...state,
                fetching: true
            }
        }

        case "FETCH_USER_ERROR": {
            return {...state,
                fetching: false,
                error: action.payload
            }
        }

        case "FETCH_USER_SUCCESS": {
            return {...state,
                fetching: false,
                fetched: true,
                user: action.payload
            }
        }

        case "SET_USER_PROFILE_IMAGE": {
            return {...state,
                user: {...state.user, default_profile_image: action.payload},
            }
        }

        case "SET_USER_NAME": {
            return {...state,
                user: {...state.user, name: action.payload},
            }
        }
    }
    return state
}