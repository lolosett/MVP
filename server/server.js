//require all needed modules
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();


app.use(cors());
app.use(bodyParser);


//set up a port
var port = process.env.PORT || 1337;

//serve up the client folder
app.use(express.static('./client'))


app.listen(port, function(){
  console.log("express server listening on port", port)
})


//check to see if server is running on server file
app.get('/findBrewery', function(req, res){
  res.send(req.body);
})
