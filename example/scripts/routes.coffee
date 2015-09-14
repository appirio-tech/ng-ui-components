'use strict'

config = ($stateProvider) ->
  states = {}

  states['avatar'] =
    url         : '/'
    title       : 'Avatar'
    templateUrl : 'views/avatar.html'

  states['countdown'] =
    url         : '/countdown'
    templateUrl : 'views/countdown.html'

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

  states['checkbox'] =
    url         : '/checkbox'
    templateUrl : 'views/checkbox.html'
    controller  : 'CheckboxExampleController as vm'

  states['selected-button'] =
    url         : '/selected-button'
    templateUrl : 'views/selected-button.html'
    controller  : 'SelectedButtonExampleController as vm'

  states['selectable'] =
    url         : '/selectable'
    templateUrl : 'views/selectable.html'
    controller  : 'SelectedButtonExampleController as vm'

  for key, state of states
    $stateProvider.state key, state

config.$inject = ['$stateProvider']

angular.module('appirio-tech-ng-ui-components').config(config).run()