angular
  .module('app', [])
  //factory makes the http request to server to find the list of breweries
    //will use user query as param


  .factory('searchBrewery', function($http){
    var getBreweryList = $http.get()
      .then(function(response){
        console.log(response)
        return(response)
      })
      .catch(error) {
        response.status(404).send('error: ', error)
      }


    return {
      getBreweryList: getBreweryList
      response: response
    }

  })



  //controller uses $scope obj, which can be utilized to render the HTML
.controller('brewController', function ($scope, searchBrewery){
  searchBrewery.getBreweryList()
    .then(function(response) {
      $scope.breweryToDisplay = response;
    })
})
