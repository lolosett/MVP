var request = require('request');
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('999e6f628210e6871d4589b40ff9c2fa');


var qs = require('querystring')


  url = 'http://api.brewerydb.com/v2/locations';

exports.brew = {
  get: brewGet
}





function brewGet(params) {
  //pass in user query as the param
  var query = {
    key : '999e6f628210e6871d4589b40ff9c2fa',
    locality: params.input
  }

  return new Promise(function(resolve, reject) {
    request.get({url:url, qs: query}, function(err, response, body) {
        if(err) {
          console.log(console.log('err: ', err))
          reject(err);
        } else {
          //console.log(console.log('data: ', data))
          resolve(JSON.parse(body));
        }
    })
  });
}
