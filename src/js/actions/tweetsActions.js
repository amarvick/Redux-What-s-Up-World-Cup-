import axios from 'axios';

export function fetchTweets() {
    return function(dispatch) {
    axios.get("http://rest.learncode.academy/api/test123/tweets")
        .then((response) => {
            dispatch({type: "FETCH_TWEETS_SUCCESS", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "FETCH_TWEETS_ERROR", payload: err})
        })
    }
}

export function addTweet(id, text) {
    return {
        type: 'ADD_TWEET',
        payload: {
            id,
            text,
        }
    }
}

export function updateTweet() {
    return {
        type: 'UPDATE_TWEET',
        payload: {
            id,
            text,
        }
    }
}

export function deleteTweets() {
    return {
        type: 'DELETE_TWEET',
        payload: ['Hello']
    }
}