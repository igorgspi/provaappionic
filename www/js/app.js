// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','firebase' ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.constant('FURL','https://lovermobile1.firebaseio.com/')

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive

  // Each tab has its own nav history stack:

  .state('home', {
    url: '/home',  
        templateUrl: 'templates/home.html',
        
  })


 .state('login', {
    url: '/login',  
        templateUrl: 'templates/login.html',
        controller: 'AuthCtrl as auth'
  })



  .state('impostazioni', {
    url: '/impostazioni',  
        templateUrl: 'templates/impostazioni.html',
        controller: 'SettingCtrl as sett'


      
})
       


  .state('chats', {
      url: '/chats',
          templateUrl: 'templates/chats.html',
          controller: 'ChatsCtrl'
      })

    .state('creagruppo', {
      url: '/creagruppo',
          templateUrl: 'templates/creagruppo.html',
          controller: 'TuttiCtrl'
    })


     .state('tuttiutenti', {
      url: '/tuttiutenti',
          templateUrl: 'templates/tuttiutenti.html',
          controller: 'TuttiCtrl'
    })


  .state('profilo', {
    url: '/profilo',
        templateUrl: 'templates/profilo.html',
        controller: 'ProfileCtrl as Prof',
         resolve: {
          auth: function($state, Auth) {
            return Auth.requireAuth().catch(function() {
              $state.go('login');
            });

          },


        
          profile: function(Auth) {
            return Auth.requireAuth().then(function(auth) {
              return Auth.getProfile(auth.uid).$loaded();
            });
          },




        about: function(Auth) {
          return Auth.requireAuth()
          .then(function(auth) {
              return Auth.getAbout(auth.facebook.accessToken);
            })
          .then(function(object) {
          return object.data.bio;
          });
        },     

 

            images: function(Auth) {
          return Auth.requireAuth()
          .then(function(auth) {
              return Auth.getImages(auth.facebook.accessToken);
            })
          .then(function(object) {
            return object.data.data;
          });
          }
       }
     




})
 



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
