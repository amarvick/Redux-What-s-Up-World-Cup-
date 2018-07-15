const express = require('express');
const app = express();
const twit = require('twitter');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/dist'));
app.use(cors());

app.get('/worldCupTweets', function(req, res) {
    const tweets = [];

    // Stream through all 'World Cup' tweets
    twitter.stream('statuses/filter', {track: 'World Cup'}, function(stream) {
        stream.on('data', function(data) {

            // Raw JSON that gets sent back
            tweets.push(data);
            console.log('ALL TWEETS server.js: ' + tweets);
        });

        setTimeout(function() {
            
            // In two seconds, get as many tweets as the server can get and then send to front end
            stream.destroy();
            res.send(tweets);
        }, 2000);
    });

})

app.get('', function(req, res) {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

const twitter = new twit({
    consumer_key: 'TGtWioVJf1Nx2tbyqYoMngnwH',
    consumer_secret: 'gq0Wg5ctkDIH9ogAEaVSAuXXZoIACBTQ5uaQQPJPMUSLexaBaM',
    access_token_key: '2597235170-lbamWi7ZR9VkiuAKAqbqsdrXy6hX4MQ3vBxh9FQ',
    access_token_secret: '1rEe033EXnAbDX7GWSNhqcEr1dO0spV3VCN6EQRQRSXej'
});