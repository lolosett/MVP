//require all needed modules
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var _ = require('underscore');

var model = require('./models/brewery.model.js')


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));


//set up a port
var port = process.env.PORT || 1337;

//serve up the client folder
app.use(express.static('./client'))

//check to see if server is running on server file

//in client figure out how to make a call to /findBrewery
app.get('/findBrewery', function(req, res){
  model.brew.get(req.query)
    .then(function(data) {
      //filter out objects with no name && website
      var results = _.filter(data.data, function(val){
        //return objects with name or website
        if(val.name === "Main Brewery") {
          if (val.hasOwnProperty('website')){
            return true;
          }
          return false;
        }
        return true;
      }).map(function(item){
        //add a display property to each item
        if (item.name === "Main Brewery") {
          item.display = item.website
        } else {
          item.display = item.name
        }

        return item
      })

      res.status(200).send(results)
    })
    .catch(function(error) {
      res.status(400).send(error);
    })
})

app.listen(port, function(){
  console.log("express server listening on port", port)
})
