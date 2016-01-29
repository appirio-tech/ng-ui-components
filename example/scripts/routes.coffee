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

  states['simple-countdown'] =
    url         : '/simple-countdown'
    templateUrl : 'views/simple-countdown.example.html'

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

  states['flush-height'] =
    url         : '/flush-height'
    templateUrl : 'views/flush-height.example.html'

  states['full-height'] =
    url         : '/full-height'
    templateUrl : 'views/full-height.example.html'

  states['fitted-width'] =
    url         : '/fitted-width'
    templateUrl : 'views/fitted-width.example.html'

  states['lock-height'] =
    url         : '/lock-height'
    templateUrl : 'views/lock-height.example.html'
    controller  : 'LockHeightExampleController as vm'

  states['tooltip'] =
    url         : '/tooltip'
    templateUrl : 'views/tooltip.example.html'

  states['image-viewer'] =
    url         : '/image-viewer'
    controller  : 'ImageViewerExampleController as vm'
    templateUrl : 'views/image-viewer.example.html'

  states['image-viewer-header'] =
    url         : '/image-viewer-header'
    controller  : 'ImageViewerHeaderExampleController as vm'
    templateUrl : 'views/image-viewer-header.example.html'

  states['dropdown'] =
    url         : '/dropdown'
    controller  : 'DropdownExampleController as vm'
    templateUrl : 'views/dropdown.example.html'

  states['provider'] =
    url         : '/provider'
    controller  : 'ProviderExampleController as vm'
    templateUrl : 'views/provider.example.html'

  for key, state of states
    $stateProvider.state key, state

config.$inject = ['$stateProvider']

angular.module('appirio-tech-ng-ui-components').config(config).run()