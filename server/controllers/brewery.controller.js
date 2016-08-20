var model = require('../models/brewery.model.js')
exports.getBrewery = {
    get: getBrewery
}


function getBrewery (req, res){
  model.brewery.get()
    .then(function(data){
      res.status(200).send(data)
    })
    .catch(function(error){
      res.status(401).send(error)
    })
}
