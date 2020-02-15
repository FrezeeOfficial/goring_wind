const app = module.exports = require('express')();
var weather = require('./weather');

// include weather route
app.use('/weather', weather);

app.all('*', (req, res) => {
    res.status(404).send({res: 'unknown api request'});
});