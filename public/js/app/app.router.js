(function() {
   "use strict";
   angular
     .module('fanboxo_app')
     .config(appRoutes);
 console.log("app_routes.js loaded!")
 appRoutes.$inject = ['$urlRouterProvider', '$stateProvider'];
     function appRoutes($urlRouterProvider, $stateProvider) {
       // Define routes/states on the state provider
       $stateProvider
         .state('home', {
            url: "/home",
            templateUrl: "/js/app/home/home.html"
         })
         .state('gift', {
            url: "/gift",
            templateUrl: "/js/app/gift/gift.html"
         });

         $urlRouterProvider.otherwise("/");
     }
 })();
