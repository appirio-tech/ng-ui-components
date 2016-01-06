'use strict'

directive = (reactDirective) ->
  reactDirective Progress

directive.$inject = ['reactDirective']

angular.module('appirio-tech-ng-ui-components').directive 'progressBar', directive
