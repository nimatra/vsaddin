module server {
    var express = require('express'),
        logger = require('morgan'),
        session = require('express-session')
        
    var Grant = require('grant-express'),
        grant = new Grant(require('./OAuthConfigure.json'))

    var http = require('http')
    
    var app = express()
    app.use(logger('dev'))
    
        // REQUIRED:
    app.use(session({
            secret: 'very secret'
        }))
        // mount grant
    app.use(grant)

    app.get('/handle_visualstudio_callback', function(req, res) {
        console.log(req.query)
        res.end(JSON.stringify(req.query, null, 2))
    })

    // Create an HTTP service.
    var port = process.env.PORT || 80;
    http.createServer(app).listen(port, function () {
        console.log('Express server listening on port ' + 80)
    });
    
    // app.get('/api', function (req, res) {
    //     res.redirect(__dirname + '/public/api');
    // });
}