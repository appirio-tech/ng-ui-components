'use strict'

directive = (reactDirective) ->
  link = (scope, element, attrs) ->
    onChange = (changeTo) ->
      scope.model = changeTo?.value
      scope.$apply()

    render = ->
      select = <Select
        options     = { scope.data }
        onChange    = { onChange }
        value       = { scope.model }
      />

      ReactDOM.render select, element[0]

    scope.$watch 'data', render

    scope.$watch 'model', render

  restrict   : 'E'
  link       : link
  scope      :
    data: '='
    model: '='

directive.$inject = ['reactDirective']

angular.module('appirio-tech-ng-ui-components').directive 'dropdown', directive
