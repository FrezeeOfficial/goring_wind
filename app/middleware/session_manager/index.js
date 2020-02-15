const app = module.exports = require('express')();
const crypto = require('crypto');
var session = require('express-session');

var tokens = [];

app.all("*", (req, res, next) => {                
    if (req.body.token == null || req.body.token == undefined) {
        res.status(401).send({res: "no auth token was provided", newToken: GenerateToken(req)})
    }

    if (checkToken(req.body.token)) {
        next();
    } else {
        res.status(401).send({res: "invalid token, a new one will not be generated and terminated"})
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

function GenerateToken(req) {

    const secret = 'abcdefg';
    const hash = crypto.createHmac('sha256', secret)
    .update(req.originalUrl)
    .digest('hex');

    tokens.push({value: hash, originalUrl: req.originalUrl})

    return hash
}