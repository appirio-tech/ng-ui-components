'use strict'

directive = ->
  restrict    : 'E'
  templateUrl : 'views/countdown.directive.html'
  controller  : 'CountdownController'
  controllerAs: 'vm'
  scope       :
    end: '@end'

angular.module('appirio-tech-ng-ui-components').directive 'countdown', directive
