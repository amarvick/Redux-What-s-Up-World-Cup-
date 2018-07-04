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
    }

    render() {
        let user = {};
        let tweets = [];

        // if (this.props) {
        //     ({ user, tweets } = this.props);
        // } else {
        //     user = {};
        //     tweets = [{id: 1, tweets: "Placeholder"}];
        // }
        
        const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>)

        return(
            <div>
                <button onClick={this.fetchData.bind(this)}>Load Tweets</button>
                <h1>{user.name}</h1>
                <ul>{mappedTweets}</ul>
            </div>
        )
    }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch,
    startup: () => dispatch(StartupActions.startup())
})
  
const mapStateToProps = (state) => ({
    nav: state.nav
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)