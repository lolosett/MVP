//require all needed modules
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();

var model = require('./models/brewery.model.js')


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));


//set up a port
var port = process.env.PORT || 1337;

//serve up the client folder
app.use(express.static('./client'))

//check to see if server is running on server file
app.get('/findBrewery', function(req, res){
  //query => {location: Santa Monica}
  model.brew.get(req.query)
    .then(function(data) {
      res.status(200).send(data)
    })
    .catch(function(error) {
      res.status(400).send(error);
    })
})

app.listen(port, function(){
  console.log("express server listening on port", port)
})
