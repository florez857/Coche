// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).config(function($stateProvider,$urlRouterProvider){

     $stateProvider

       .state('tabs',{
       url:'/tabs',
       abstract:true,
       templateUrl:'templates/tabs.html'
     })
       .state('tabs.home',{
         url:'/home',
         views:{
           'tabs-home':{
             templateUrl:'templates/home.html',
             controller:'HomeCtrl'
           }
         }
       })
       .state('tabs.comunidad',{
              url:'/comunidad',
              views:{
                  'tabs-comunidad':{
                    templateUrl:'templates/comunidad.html',
                    controller:'ComunidadCtrl'
                  }

              }

       })

       .state('tabs.datos',{
         url:'/datos',
         views:{
           'tabs-datos':{
             templateUrl:'templates/datos.html',
             controller:'DatoCtrl'
           }

         }

       })

       .state('tabs.coche',{
         url:'/coche',
         views:{
           'tabs-coche':{
             templateUrl:'templates/coche.html',
             controller:'CocheCtrl'
           }

         }

       })
       .state('tabs.informacion',{
         url:'/informacion',
         views:{
           'tabs-informacion':{
             templateUrl:'templates/informacion.html',
             controller:'infoCtrl'
           }

         }

       })
     ;
    $urlRouterProvider.otherwise('/tabs/home');

  })
  .controller('HomeCtrl',function($scope){

  console.log("salida de consola de home")
  })

  .controller('ComunidadCtrl',function($scope){
console.log("salida de consola de comunidad")

  })

  .controller('CocheCtrl',function($scope){
console.log("salida de consola de coche")

  })
  .controller('DatoCtrl',function($scope){

console.log("salida de consola de dato")
  })
  .controller('infoCtrl',function($scope){
console.log("salida de consola de info")

  })
