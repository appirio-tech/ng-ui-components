'use strict';

dir = ($window) ->
  elements = []

  lockHeight = ($element) ->
    attr          = $element.attr 'lock-height'
    classToToggle = attr if typeof attr == 'string'

    $element.css 'height', 'auto'
    $element.css 'max-height', 'none'

    $element.removeClass classToToggle if classToToggle

    $element.css 'max-height', $element.height() + 'px'

    $element.addClass classToToggle if classToToggle

  $($window).bind 'resize', ->
    for element in elements
      lockHeight element

  link = (scope, element, attrs) ->
    elements.push $(element[0])

    element.ready ->
      lockHeight $(element[0])

  restrict: 'A'
  link    : link
  priority: -1

dir.$inject = ['$window']

angular.module('appirio-tech-ng-ui-components').directive 'lockHeight', dir

