'use strict'

config = ($stateProvider) ->
  states = {}

  states['avatar'] =
    url         : '/'
    title       : 'Avatar'
    templateUrl : 'views/avatar.html'

  states['loader'] =
    url         : '/loader'
    templateUrl : 'views/loader.html'

  states['filters'] =
    url         : '/filters'
    templateUrl : 'views/filters.html'

  states['modal'] =
    url         : '/modal'
    templateUrl : 'views/modal.html'
    controller  : 'ModalExampleController as vm'

  states['focus-on-click'] =
    url         : '/focus-on-click'
    templateUrl : 'views/focus-on-click.html'
    controller  : 'FocusOnClickController as vm'

  for key, state of states
    $stateProvider.state key, state

config.$inject = ['$stateProvider']

angular.module('appirio-tech-ng-ui-components').config(config).run()