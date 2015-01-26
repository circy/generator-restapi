var express = require('express');
var bodyParser = require('body-parser');
<% if (cors == true) { %>var cors = require('corse');<% } %>
<% if (jwt == true) { %>var expressJwt = require('express-jwt');<% } %>
<% if (jwt == true) { %>var jwt = require('jsonwebtoken');<% } %>
<% if (mongo == true) { %>var mongoose = require('mongoose');

mongoose.connect('uriToMongoDB');
var db = mongoose.connection;
db.on('error', function(){
  console.log('Connection to MongoDB ist failed!');
});
db.once('open',function(){
  console.log('MongoDB Connected!');
});
<% } %>

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
<% if (cors == true) { %>app.use(cors());<% } %>

<% if (jwt == true) { %>app.use('/api', expressJwt({secret: "xxxx-xxxxx-xxxxx-xxx"}));<% } %>

//--Routes will be added automatically--


app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.send(500, { message: err.message });
});

app.listen(8080, function() {
  console.log('Express server listening on port 8080');
});
