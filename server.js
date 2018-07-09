const express = require('express');
const twit = require('twitter');
const app = express();
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 8000;
const server = require('http').Server(app);

app.use(express.static(__dirname + '/dist'));
app.use(cors());

server.listen(port, function() {
    console.log("App running on port " + port);
})

// PathLocationStrategy

app.get('/worldCupTweets', function(req, res) {
    const tweets = [];

    twitter.stream('statuses/filter', {track: 'World Cup'}, function(stream) {
        stream.on('data', function(data) {
            // Raw JSON that gets sent back
            tweets.push(data);
            console.log('ALL TWEETS server.js: ' + tweets);
        });

        setTimeout(function() {
            console.log('Collected ' + tweets.length + ' tweets.');
            console.log(tweets[0]);
            stream.destroy();

            res.send(tweets);
            // process.exit(0);
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
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});