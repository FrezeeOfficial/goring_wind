var fs = require('file-system');
var settings = require('./settings.conf');

module.exports = function (req, res, next) {
  if (settings.log) {
    var time = Date.now()

    const data = {
      baseUrl: req.baseUrl,
      body: req.body,
      cookies: req.cookies,
      isFresh: req.fresh,
      hostname: req.hostname,
      ip: req.ip,
      method: req.method,
      originalUrl: req.originalUrl,
      params: req.params,
      time: time
    }

    fs.appendFile(settings.log_location, JSON.stringify(data) + ",\r\n", function (err) {
      if (err) return console.log(err);
    });

  }


  next()
}