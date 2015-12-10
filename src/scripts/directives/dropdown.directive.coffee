'use strict'

directive = (reactDirective) ->
  reactDirective window.Dropdown

directive.$inject = ['reactDirective']

angular.module('appirio-tech-ng-ui-components').directive 'dropdown', directive
