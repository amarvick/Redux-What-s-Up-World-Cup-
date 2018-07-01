import { applyMiddleware, combineReducers, createStore } from 'redux';
import axios from 'axios'; // xhr request (XML Http Request)
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null,
}

const userReducer = function(state=initialState, action) {
    switch(action.type) {
        // case "CHANGE_USERNAME": {
        //     // state.username = action.payload;
        //     state = {...state, username: action.payload};
        //     break;
        // }
        // case "CHANGE_NAME": {
        //     // state.name = action.payload;
        //     state = {...state, name: action.payload};
        //     break;
        // }
        // default: {
        //     throw new Error("ERROR!!!! Action does not exist.");
        // }

        case "FETCH_USERS_START" : {
            return {...state,
                fetching: true
            }
            break;
        }

        case "FETCH_USERS_ERROR" : {
            return {...state,
                fetching: false,
                error: action.payload
            }
            break;
        }

        case "RECEIVE_USERS": {
            return {...state,
                fetching: false,
                fetched: true,
                users: action.payload
            }
            break;
        }
    }
    return state
};

const tweetsReducer = (state=[], action) => {
    return state;
}

const allReducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer,
})

const logger = (store) => (next) => (action) => {
    console.log("action fired", action);
    next(action); // helps change the store function after the action
}

const error = (store) => (next) => (action) => {
    try {
        next(action);
    } catch(e) {
        console.log("ERROR! ", e);
    }
}

const middleware = applyMiddleware(thunk, logger);
// helps keep loggers stored, making Redux simple
// thunk 

// Holds state of App
const store = createStore(allReducers, '', middleware);

store.subscribe(() => {
    console.log("animal store changed", store.getState())
})

// store.dispatch({type: "CHANGE_USERNAME", payload: "@amarvick"})
// store.dispatch({type: "CHANGE_NAME", payload: "Alex"})
store.dispatch((dispatch) => {
    dispatch({type: "FETCH_USERS_START"})
    axios.get("http://rest.learncode.academy/api/wstern/users")
        .then((response) => {
            dispatch({type: "RECEIVE_USERS", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "FETCH_USERS_ERROR", payload: err})
        })

    // dispatch({type: "CHANGE_USERNAME", payload: "@amarvick"})
    // dispatch({type: "CHANGE_NAME", payload: "Alex"})
})


// store.dispatch({type: "CHANGE_NERD", payload: "This doesn't exist!!"})