(function() {
  'use strict';

  angular
    .module('madBackWeb')
    .factory('ErrorSrv', processError);

  /** @ngInject */
  function processError() {
    var error, getError;
    error = {
      '101': '令牌不存在或已经过期, 请重新登陆',
      '102':'用户名或密码错误',
      '108':'请求错误',
      '401':'该用户ID不存在',
      '402':'经办人用户名密码错误',
      '403':'该申请不存在',
      '404':'该后台用户已存在',
      '405':'后台用户权限错误',
      '406':'该后台用户不存在',
      '407':'登录名不能为空',
      '408':'登录密码不能为空',
      '409':'审核未通过理由不能为空',
      '410':'管理员的姓名不能为空',
      '411':'管理员的邮箱不能为空',
      '412':'管理员的性别不能为空',
      '413':'管理员的管理级别不能为空',
      '414':'管理员的上任时间不能为空',
      '415':'参数不完整',
      '999':'未知错误'
    };
    getError = function(errCode) {
      return error[errCode];
    };
    return {
      getError: getError
    };
  }
})();
