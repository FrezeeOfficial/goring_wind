const app = module.exports = require('express')();

app.use('/weather', require('./weather'));

app.all('*', (req, res) => {
    res.status(404).send({res: 'unknown api request'});
});