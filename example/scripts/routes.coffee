'use strict'

config = ($stateProvider) ->
  states = {}

  states['avatar'] =
    url         : '/'
    title       : 'Avatar'
    templateUrl : 'views/avatar.example.html'

  states['countdown'] =
    url         : '/countdown'
    templateUrl : 'views/countdown.example.html'

  states['loader'] =
    url         : '/loader'
    templateUrl : 'views/loader.example.html'

  states['filters'] =
    url         : '/filters'
    templateUrl : 'views/filters.example.html'

  states['modal'] =
    url         : '/modal'
    templateUrl : 'views/modal.example.html'
    controller  : 'ModalExampleController as vm'

  states['focus-on-click'] =
    url         : '/focus-on-click'
    templateUrl : 'views/focus-on-click.example.html'

  states['checkbox'] =
    url         : '/checkbox'
    templateUrl : 'views/checkbox.example.html'
    controller  : 'CheckboxExampleController as vm'

  states['selected-button'] =
    url         : '/selected-button'
    templateUrl : 'views/selected-button.example.html'
    controller  : 'SelectedButtonExampleController as vm'

  states['selectable'] =
    url         : '/selectable'
    templateUrl : 'views/selectable.example.html'
    controller  : 'SelectedButtonExampleController as vm'

  states['scroll'] =
    url         : '/scroll'
    templateUrl : 'views/scroll.example.html'

  for key, state of states
    $stateProvider.state key, state

config.$inject = ['$stateProvider']

angular.module('appirio-tech-ng-ui-components').config(config).run()