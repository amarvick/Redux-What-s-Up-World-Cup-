import axios from 'axios';

export function fetchTweets() {
    return function(dispatch) {
    axios.get("https://api.twitter.com/1.1/search/tweets.json?q=from%23WorldCup")
        .then((response) => {
            dispatch({type: "FETCH_TWEETS_SUCCESS", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "FETCH_TWEETS_ERROR", payload: err})
        })
    }
    // return {
    //     type: "FETCH_TWEETS_SUCCESS",
    //     payload: [{
    //         id: 1,
    //         text: 'AlexTweet'
    //     }]
    // }
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