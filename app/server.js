process.env.NODE_ENV = 'production';

var express = require('express');
var bodyParser = require('body-parser');
var config = require('../config');
var routes = require('./routes');
var request_logger = require('./middleware/req_logger');
var session_manager = require('./middleware/session_manager');
var cookieParser = require('cookie-parser');

var app = express();

// uses x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// set developer runtime options
if (!config.production) {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
        
        next();
    });
}

// this manages sessions
if (config.usetokens) {
    app.use(session_manager);
}

// call request logger to add event to db
if (config.uselog){
    app.use(request_logger);
}

// mount routes
app.use(routes);

app.listen(process.env.PORT || config.port, /* config.host, */ () => {
    console.log(`API started on  ${config.host}:${config.port}`);
});