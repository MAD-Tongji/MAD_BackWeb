(function() {
  'use strict';

  angular
    .module('madBackWeb')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/',
        views: {
            'header': {
                templateUrl: 'app/components/header/header.html'
            },
            'navbar': {
                templateUrl: 'app/components/navbar/navbar.html'
            },
            'sub-navbar': {
                templateUrl: 'app/components/sub-navbar/dashboard-sub-navbar.html'
            },
            'content': {
                templateUrl: 'app/dashboard/dashboard.html',
                controller: 'MainController',
                controllerAs: 'dashboard'
            },
            'footer': {
                templateUrl: 'app/components/footer/footer.html'
            }
        }
      })
      .state('app.login', {
        url: 'login',
        views: {
            'header@': {
                templateUrl: 'app/blank/blank.html'
            },
            'navbar@': {
                templateUrl: 'app/blank/blank.html'
            },
            'sub-navbar@': {
                templateUrl: 'app/blank/blank.html'
            },
            'content@': {
                templateUrl: 'app/login/login.html',
                controller: 'LoginCtrl'
            },
            'footer@': {
                templateUrl: 'app/blank/blank.html'
            }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
