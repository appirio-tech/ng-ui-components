'use strict'

Checkbox = require '../elements/Checkbox/Checkbox.cjsx'

directive = (reactDirective) ->
  reactDirective Checkbox

directive.$inject = ['reactDirective']

angular.module('appirio-tech-ng-ui-components').directive 'checkboxR', directive

