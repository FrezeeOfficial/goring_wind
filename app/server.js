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

// this manages sessions
app.use(session_manager);


// call request logger to add event to db
app.use(request_logger);

// mount routes
app.use(routes);

// set developer runtime options
if (!config.production) {
    app.use(function(req, res, next) {
        res. header("Access-Control-Allow-Origin", "*");
        res. header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
    });
}


app.listen(config.port, config.host, () => {
    console.log(`API started on  ${config.host}:${config.port}`);
});