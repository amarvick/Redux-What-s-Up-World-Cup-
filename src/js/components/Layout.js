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

export default class Layout extends React.Component {
    fetchUser() {
        this.props.dispatch(fetchUser())
    }

    fetchTweets() {
        this.props.dispatch(fetchTweets())
    }

    render() {
        const { user, tweets } = this.props;

        // if (!tweets.length) {

        // }

        const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>)

        return(
            <div>
                <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
                <h1>{user.name}</h1>
                <ul>{mappedTweets}</ul>
            </div>
        )
    }
}

// wraps dispatch to create nicer functions to call within our component
// const mapDispatchToProps = (dispatch) => ({
//     dispatch: dispatch,
//     startup: () => dispatch(StartupActions.startup())
// })
  
// const mapStateToProps = (state) => ({
//     nav: state.nav
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Layout)