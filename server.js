const express = require('express');
const app = express();
const twit = require('twitter');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/dist'));
app.use(cors());

app.listen(8000, function() {
    console.log('Express server listening on port 8000');
})

app.get('/nbaTweets', function(req, res) {
    const tweets = [];

    // Stream through all 'NBA' tweets
    twitter.stream('statuses/filter', {track: 'NBA'}, function(stream) {
        stream.on('data', function(data) {
            // Raw JSON that gets sent back
            tweets.push(data);
        });

        // In two seconds, get as many tweets as the server can get and then send to front end
        setTimeout(function() {
            stream.destroy();
            res.send(tweets);
        }, 2000);
    });

})

app.get('', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const twitter = new twit({
    consumer_key: 'kGpbc9vWAGsomsDFYGvcr3CQR',
    consumer_secret: 'vfy5GlE0nCyob5oWXvYN550bcWXSQ2NYqvJkv0jLcRHZpiss4u',
    access_token_key: '2597235170-GyI52NhaASkQVcGo5QhAAW0QgKkaMFJWegEbm7R',
    access_token_secret: 'mmVTxbaMF671wZnJvT9bHoAwaXFWiFVx4XBH29VIZvHXl'
});