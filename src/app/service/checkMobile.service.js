(function() {
  'use strict';

  angular
  .module('madBackWeb')
  .service('GetUserDetailSrv', GetUserDetailSrv);

  /** @ngInject*/
  function GetUserDetailSrv($resource, baseURL) {
    this.getUserDetailById = function () {
      return $resource(baseURL + '/user/detail/:userid?token=:token&tag=:tag', {
        userid: "userId",
        token: "@token",
        tag: "@tag"
      });
    };
  }
})();