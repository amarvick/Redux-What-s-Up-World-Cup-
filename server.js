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

app.get('/worldCupTweets', function(req, res) {
    const tweets = [];

    // Stream through all 'World Cup' tweets
    twitter.stream('statuses/filter', {track: 'NBA'}, function(stream) {
        stream.on('data', function(data) {

            // Raw JSON that gets sent back
            tweets.push(data);
        });

        setTimeout(function() {
            
            // In two seconds, get as many tweets as the server can get and then send to front end
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
    consumer_key: 'ct2aQ6cJ0fTHmolugxcKFX2T6',
    consumer_secret: 'yZEksS22FnQoxBir7bBsuzDCdlQDLuwFZebkhmfype8sEoxG4J',
    access_token_key: '2597235170-lbamWi7ZR9VkiuAKAqbqsdrXy6hX4MQ3vBxh9FQ',
    access_token_secret: '1rEe033EXnAbDX7GWSNhqcEr1dO0spV3VCN6EQRQRSXej'
});