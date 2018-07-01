import { combineReducers, createStore } from 'redux';

const userReducer = function(state={}, action) {
    switch(action.type) {
        case "CHANGE_USERNAME": {
            // state.username = action.payload;
            // break;
        }
        case "CHANGE_NAME": {
            // state.name = action.payload;
            // break;
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

// Holds state of App
const store = createStore(allReducers);

store.subscribe(() => {
    console.log("animal store changed", store.getState())
})

store.dispatch({type: "CHANGE_USERNAME", payload: "@amarvick"})
store.dispatch({type: "CHANGE_NAME", payload: "Alex"})