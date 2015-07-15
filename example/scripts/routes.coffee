'use strict'

config = ($stateProvider) ->
  states = {}

  states['avatar'] =
    url: '/avatar'
    title: 'Avatar'
    templateUrl: 'views/avatar.html'

  for key, state of states
    $stateProvider.state key, state

config.$inject = ['$stateProvider']

angular.module('appirio-tech-ng-ui-components').config(config).run()