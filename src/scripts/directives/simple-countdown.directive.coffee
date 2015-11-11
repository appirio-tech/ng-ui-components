'use strict'

directive = ->
  restrict    : 'E'
  templateUrl : 'views/simple-countdown.directive.html'
  controller  : 'SimpleCountdownController'
  controllerAs: 'vm'
  scope       :
    end: '@end'

angular.module('appirio-tech-ng-ui-components').directive 'simpleCountdown', directive
