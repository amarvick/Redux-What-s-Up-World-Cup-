import { createStore } from 'redux';

const reducer = function(state, action) {
    if (action.type === "CAT") {
        return (state + action.age * 7);
    }

    else if (action.type === "DOG") {
        return (state + action.age * 15);
    }

    return state;
}

// Holds state of App
const store = createStore(reducer, 0);

store.subscribe(() => {
    console.log("store changed", store.getState())
})

store.dispatch({type: "CAT", age: 5})
store.dispatch({type: "CAT", age: 2})
store.dispatch({type: "DOG", age: 5})
store.dispatch({type: "CAT", age: 7})
store.dispatch({type: "DOG", age: 3})