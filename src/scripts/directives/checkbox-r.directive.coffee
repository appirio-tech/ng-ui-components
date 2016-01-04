'use strict'

checkbox = require '../elements/checkbox.element'

directive = (reactDirective) ->
  reactDirective checkbox

directive.$inject = ['reactDirective']

angular.module('appirio-tech-ng-ui-components').directive 'checkboxR', directive

