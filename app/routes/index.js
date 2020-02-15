const app = module.exports = require('express')();

app.all('*', (req, res) => {
    res.status(404).send({res: 'unknown api request'});
});