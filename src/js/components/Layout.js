import React, { Component, StartupActions } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions/userActions'
import { fetchTweets } from '../actions/tweetsActions'

// Inducing props
connect((store) => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets,
    };
})

class Layout extends React.Component {
    fetchData() {
        this.props.dispatch(fetchTweets());
        this.props.dispatch(fetchUser());

        // console.log('DATA: ' + JSON.stringify(this.props));
        // console.log(this.props);
    }

    render() {
        let user = {};
        let tweets = [];

        if (this.props.user && this.props.tweets) {
            user = this.props.user;
            tweets = this.props.tweets;
        }
        

        const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>)

        return(
            <div>
                <button onClick={this.fetchData.bind(this)}>Load Tweets</button>
                <h1>User: {user.name}</h1>
                <ul><u>Tweets</u> {mappedTweets}</ul>
            </div>
        )
    }
}

// wraps dispatch to create nicer functions to call within our component
// Mapping dispatch actions to the props
const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch,
    startup: () => dispatch(StartupActions.startup())
})
  
// Maps the state in to props (for displaying on the front end)
const mapStateToProps = (state) => ({
    nav: state.nav,
    tweets: state.tweets.tweets,
    user: state.user.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)