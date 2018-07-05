import axios from 'axios';

export function fetchTweets() {
    // return function(dispatch) {
    // axios.get("http://rest.learncode.academy/api/amarvick/tweets")
    //     .then((response) => {
    //         dispatch({type: "FETCH_TWEETS_SUCCESS", payload: response.data})
    //     })
    //     .catch((err) => {
    //         dispatch({type: "FETCH_TWEETS_ERROR", payload: err})
    //     })
    // }
    return {
        type: "FETCH_TWEETS_SUCCESS",
        payload: [{
            id: 1,
            text: 'AlexTweet'
        }]
    }
}

export function addTweet(id, text) {
    return {
        type: 'ADD_TWEET',
        payload: {
            id,
            text,
        },
    }
}

export function updateTweet(id, text) {
    return {
        type: 'UPDATE_TWEET',
        payload: {
            id,
            text,
        },
    }
}

export function deleteTweets(id) {
    return {
        type: 'DELETE_TWEET',
        payload: id,
    }
}