export default function reducer(state={
    fetching: false,
    fetched: false,
    user: {
        id: null,
        username: null,
        name: null,
        age: null,
    },
    error: null,
}, action)

switch(action.type) {
    case "FETCH_USER" : {
        return {...state,
            fetching: true
        }
        break;
    }

    case "FETCH_USER_ERROR" : {
        return {...state,
            fetching: false,
            error: action.payload
        }
        break;
    }

    case "FETCH_USER_SUCCESS": {
        return {...state,
            fetching: false,
            fetched: true,
            tweets: action.payload
        }
        break;
    }

    case "SET_USER_USERNAME": {
        return {...state,
            user: {...state.user, username: action.payload},
        }
        break;
    }

    case "SET_USER_NAME": {
        return {...state,
            user: {...state.user, name: action.payload},
        }
        break;
    }
}
return state