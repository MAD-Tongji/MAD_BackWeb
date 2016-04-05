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
                templateUrl: 'app/components/sub-navbar/user-list-sub-navbar.html'
            },
            'content': {
                templateUrl: 'app/user-list/user-list.html',
                controller: 'MainController',
                controllerAs: 'userList'
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
      })
      .state('app.advert-push', {
        url: 'advert/push',
        views: {
            'sub-navbar@': {
              templateUrl: 'app/components/sub-navbar/advert-sub-navbar.html'
            },
            'content@': {
              templateUrl: 'app/advert-push/advert-push.html',
              controller: 'AdvertPushCtrl'
            }
        }
      })
      .state('app.advert-audit', {
        url: 'advert/audit',
        views: {
          'sub-navbar@': {
            templateUrl: 'app/components/sub-navbar/advert-sub-navbar.html'
          },
          'content@': {
            templateUrl: 'app/advert-audit/advert-audit.html',
            controller: 'AdvertAuditCtrl'
          }
        }
      })
      .state('app.advert-search', {
        url: 'advert/search',
        views: {
          'sub-navbar@': {
            templateUrl: 'app/components/sub-navbar/advert-sub-navbar.html'
          },
          'content@': {
            templateUrl: 'app/advert-search/advert-search.html',
            controller: 'AdvertSearchCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
