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
    states['modal'] = {
      url: '/modal',
      templateUrl: 'views/modal.html',
      controller: 'ModalExampleController as vm'
    };
    states['focus-on-click'] = {
      url: '/focus-on-click',
      templateUrl: 'views/focus-on-click.html',
      controller: 'FocusOnClickController as vm'
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

(function() {
  'use strict';
  var ModalExampleController;

  ModalExampleController = function($scope) {
    var activate, vm;
    vm = this;
    vm.show = false;
    activate = function() {
      return vm;
    };
    return activate();
  };

  ModalExampleController.$inject = ['$scope'];

  angular.module('appirio-tech-ng-ui-components').controller('ModalExampleController', ModalExampleController);

}).call(this);
