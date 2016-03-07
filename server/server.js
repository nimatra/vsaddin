var server;
(function (server) {
    var express = require('express'), logger = require('morgan'), session = require('express-session');
    var Grant = require('grant-express'), grant = new Grant(require('./OAuthConfigure.json'));
    var app = express();
    app.use(logger('dev'));
    // REQUIRED:
    app.use(session({
        secret: 'very secret'
    }));
    // mount grant
    app.use(grant);
    app.get('localhost:3000/connect/visualstudio/callback', function (req, res) {
        console.log(req.query);
        res.end(JSON.stringify(req.query, null, 2));
    });
    app.listen(3000, function () {
        console.log('Express server listening on port ' + 3000);
    });
})(server || (server = {}));
