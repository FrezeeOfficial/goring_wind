const app = module.exports = require('express')();
var session = require('express-session');

var tokens = [];

app.all("*", (req, res, next) => {
    if (req.body.token == null || req.body.token == undefined) {
        res.status(401).send({res: "no auth token was provided, as such access have been terminated"})
    }

    if (checkToken(req.body.token)) {
        next();
    } else {
        res.status(401).send({res: "invalid token, as such access have been terminated"})
        res.end();
    }
})


function checkToken(token) {
    var accepted = false;

    for (var i = 0; i < tokens.length; i++) {
        if (tokens[i].value == token) {
            accepted = true;
        }
    }
    return accepted;
}