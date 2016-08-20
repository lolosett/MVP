angular
  .module('app', [])
  .config(config)
//download snippets for angular google search atom snippets for angular and it will tell you how to include these snippets
  function config ($stateProvider, $urlRouterProvider, $httpProvider){
    //google state provider and urlRouterProvider
    $stateProvider
    //creating state called home
    .state('home', {
      url: '/home',
      //create this folder path, which will create our view
      templateUrl: '../pages/index.html',
      controller: 'HomeController'
    })

    $urlRouterProvider
    //this sets up a default route
      .otherwise('/home')

  }
