'use strict'

directive = (reactDirective) ->
  reactDirective Select

directive.$inject = ['reactDirective']

angular.module('appirio-tech-ng-ui-components').directive 'dropdown', directive
