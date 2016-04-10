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
                templateUrl: 'app/components/sub-navbar/dashboard-sub-navbar.html',
                controller: 'subNavbarCtrl'
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
                templateUrl: 'app/blank/blank.html',
                controller: 'subNavbarCtrl'
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
              templateUrl: 'app/components/sub-navbar/advert-sub-navbar.html',
              controller: 'subNavbarCtrl'
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
            templateUrl: 'app/components/sub-navbar/advert-sub-navbar.html',
            controller: 'subNavbarCtrl'
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
            templateUrl: 'app/components/sub-navbar/advert-sub-navbar.html',
            controller: 'subNavbarCtrl'
          },
          'content@': {
            templateUrl: 'app/advert-search/advert-search.html',
            controller: 'AdvertSearchCtrl'
          }
        }
      })
      .state('app.user', {
        url: 'user/list-mobile',
        views: {
            'sub-navbar@': {
                templateUrl: 'app/components/sub-navbar/user-list-sub-navbar.html',
                controller: 'subNavbarCtrl'
            },
            'content@': {
                templateUrl: 'app/user-list-mobile/user-list-mobile.html'
            }
        }
      })
      .state('app.user.list-advert', {
        url: 'user/list-advert',
        views: {
            'sub-navbar@': {
                templateUrl: 'app/components/sub-navbar/user-list-sub-navbar.html',
                controller: 'subNavbarCtrl'
            },
            'content@': {
                templateUrl: 'app/user-list-advert/user-list-advert.html'
            }
        }
      })
      .state('app.user.check-advert', {
        url: 'user/check-advert',
        views: {
            'sub-navbar@': {
                templateUrl: 'app/components/sub-navbar/user-check-sub-navbar.html',
                controller: 'subNavbarCtrl'
            },
            'content@': {
                templateUrl: 'app/user-check-advert/user-check-advert.html'
            }
        }
      })
      .state('app.user.check-mobile', {
          url: 'user/check-mobile',
          views: {
            'sub-navbar@': {
              templateUrl: 'app/components/sub-navbar/user-check-sub-navbar.html',
              controller: 'subNavbarCtrl'
            },
            'content@': {
              templateUrl: 'app/user-check-mobile/user-check-mobile.html'
            }
          }
      })
      .state('app.user.create', {
          url: 'user/create',
          views: {
            'sub-navbar@': {
              templateUrl: 'app/components/sub-navbar/user-create-sub-navbar.html',
              controller: 'subNavbarCtrl'
            },
            'content@': {
              templateUrl: 'app/user-create/user-create.html'
            }
          }
      })
      .state('app.advert-detail', {
        url: 'advert/detail',
        views: {
          'sub-navbar@': {
            templateUrl: 'app/components/sub-navbar/advert-sub-navbar.html',
            controller: 'subNavbarCtrl'
          },
          'content@': {
            templateUrl: 'app/advert-detail/advert-detail.html'
          }
        }
      })
      .state('app.back-userlist', {
        url: 'back-userlist',
        views: {
          'navbar@': {
            templateUrl: 'app/components/navbar/navbar.html'
          },
          'sub-navbar@': {
            templateUrl: 'app/components/sub-navbar/back-userlist-sub-navbar.html',
            controller: 'subNavbarCtrl'
          },
          'content@': {
            templateUrl: 'app/back-userlist/back-userlist.html',
            controller: 'backgroundManagementCtrl'
          }
        }
      })
      .state('app.back-adduser', {
        url: 'back-adduser',
        views: {
          'navbar@': {
            templateUrl: 'app/components/navbar/navbar.html'
          },
          'sub-navbar@': {
            templateUrl: 'app/components/sub-navbar/back-userlist-sub-navbar.html',
            controller: 'subNavbarCtrl'
          },
          'content@': {
            templateUrl: 'app/back-adduser/back-adduser.html',
            controller: 'backgroundManagementCtrl'
          }
        }
      })
      .state('app.back-auth', {
        url: 'back-auth',
        views: {
          'navbar@': {
            templateUrl: 'app/components/navbar/navbar.html'
          },
          'sub-navbar@': {
            templateUrl: 'app/components/sub-navbar/back-userlist-sub-navbar.html',
            controller: 'subNavbarCtrl'
          },
          'content@': {
            templateUrl: 'app/back-auth/back-auth.html',
            controller: 'backgroundManagementCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
