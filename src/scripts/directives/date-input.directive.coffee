'use strict'

directive = ->
  restrict    : 'E'
  templateUrl : 'views/date-input.directive.html'
  controller  : 'DateInputController as vm'
  scope       :
    date       : '='
    isValid    : '='
    placeHolder: '@'

angular.module('appirio-tech-ng-ui-components').directive 'dateInput', directive
