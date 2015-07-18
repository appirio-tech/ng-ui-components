'use strict'

directive = ->
  restrict    : 'E'
  templateUrl : 'views/loader.directive.html'

angular.module('appirio-tech-ng-ui-components').directive 'loader', directive

