angular
  .module('app', [])
  //factory makes the http request to server to find the list of breweries
    //will use user query as param

  .factory('searchBrewery', function ($http) {
    // Your code here

    var getBreweryList = function (params) {
      return $http({
        method: 'GET',
        url: '/findBrewery',
        params: {
          input: params
        }
      })
      .then(function (resp) {
        console.log("resp in app.js ", resp)
        return resp.data;
      });
    };

    return {
      getBreweryList: getBreweryList,
    };
    })


  //controller uses $scope obj, which can be utilized to render the HTML
.controller('brewController', function ($scope, searchBrewery){

  $scope.submit = function(){
    console.log("inside submit");
    searchBrewery.getBreweryList($scope.userSearch)
    .then(function(response) {
      $scope.breweryToDisplay = response;
    })
  }

  $scope.go = function ( website ) {
  $location.path( website );
};

})
