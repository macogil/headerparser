var PORT = process.env.PORT || 3000;
var express = require('express');
var morgan = require('morgan');
var API = "/api/whoami";

var app = express();

app.use(morgan('dev'));

app.get(API, function(req, res){
  var lang = req.headers['accept-language'];
  var user = req.headers['user-agent'];
  var ip = req.socket.remoteAddress;

  res.json({
    language: lang,
    userAgent: user,
    ip: ip
  });

});

app.listen(PORT, function(){
  console.log('Listening on port '+PORT);

});
