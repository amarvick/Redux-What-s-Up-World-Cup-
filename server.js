const express = require('express');
var twit = require('twitter');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const server = require('http').Server(app);

app.use(express.static(__dirname + '/dist'));

server.listen(port, function() {
    console.log("App running on port " + port);
})

// PathLocationStrategy

app.get('', function(req, res) {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

var twitter = new twit({
    /* four keys in here; will not expose on Github */
});

var count = 0,
    util = require('util');

twitter.stream('filter', {track: 'love'}, function(stream) {
    stream.on('data', function(data) {
        // Raw JSON that gets sent back
        console.log(util.inspect(data));
        stream.destroy();
        process.exit(0);
    });
});