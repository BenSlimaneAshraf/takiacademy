var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(_dirname + '/builds'));

app.get('/', function(request, response) {
  response.render('production');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
