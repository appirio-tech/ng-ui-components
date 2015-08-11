(function() {
  'use strict';
  var config;

  config = function($stateProvider) {
    var key, results, state, states;
    states = {};
    states['avatar'] = {
      url: '/',
      title: 'Avatar',
      templateUrl: 'views/avatar.html'
    };
    states['countdown'] = {
      url: '/countdown',
      templateUrl: 'views/countdown.html'
    };
    states['loader'] = {
      url: '/loader',
      templateUrl: 'views/loader.html'
    };
    states['filters'] = {
      url: '/filters',
      templateUrl: 'views/filters.html'
    };
    results = [];
    for (key in states) {
      state = states[key];
      results.push($stateProvider.state(key, state));
    }
    return results;
  };

  config.$inject = ['$stateProvider'];

  angular.module('appirio-tech-ng-ui-components').config(config).run();

}).call(this);
