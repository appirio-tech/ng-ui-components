'use strict'

directive = (reactDirective) ->
  reactDirective 'progress-bar'

directive.$inject = ['reactDirective']

angular.module('appirio-tech-ng-ui-components').directive 'progressBar', directive
