'use strict'

directive = ->
  restrict    : 'E'
  templateUrl : 'views/date-input.directive.html'
  scope       :
    date: '='

angular.module('appirio-tech-ng-ui-components').directive 'dateInput', directive
