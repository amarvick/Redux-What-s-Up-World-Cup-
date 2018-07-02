export default function reducer(state={
    fetching: false,
    fetched: false,
    tweets: [],
    error: null,
}, action)

switch(action.type) {
    case "FETCH_TWEETS" : {
        return {...state,
            fetching: true
        }
        break;
    }

    case "FETCH_TWEETS_ERROR" : {
        return {...state,
            fetching: false,
            error: action.payload
        }
        break;
    }

    case "FETCH_TWEETS_SUCCESS": {
        return {...state,
            fetching: false,
            fetched: true,
            tweets: action.payload
        }
        break;
    }

    case "ADD_TWEET": {
        return {...state,
            tweets: [...state.tweets, action.payload],
        }
    }
    case "UPDATE_TWEET": {
        const { id, text } = action.payload
        const newTweets = [...state.tweets]
        const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id)
        newTweets[tweetToUpdate] = action.payload;

        return {
            ...state,
            tweets: newTweets
        }
    }

    case "DELETE_TWEET": {
        return {
            ...state,
            tweets: state.tweets.filter(tweet => tweet.id !== action.payload)
        }
    }
}
return state