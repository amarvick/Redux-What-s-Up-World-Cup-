import axios from 'axios';

export function fetchTweets() {
    return function(dispatch) {
    axios.get("http://localhost:8000/worldCupTweets") // https://api.twitter.com/1.1/search/tweets.json?q=from%23WorldCup    https://stream.twitter.com/1.1/statuses/filter.json?track=World%20Cup
        .then((response) => {
            dispatch({type: "FETCH_TWEETS_SUCCESS", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "FETCH_TWEETS_ERROR", payload: err})
        })
    }
    // return {
    //     type: "FETCH_TWEETS_SUCCESS",
    //     payload: [
    //         {
    //             id: 1,
    //             text: 'AlexTweet',
    //             nerd: 'notNerd'
    //         },
    //         {
    //             id: 2,
    //             text: 'MichaelTweet',
    //             nerd: 'heyNerd'
    //         }
    //     ]
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