'use strict';

dir = ($window) ->
  elements = []

  lockHeight = ($element) ->
    attr          = $element.attr 'lock-height'
    classToToggle = attr if typeof attr == 'string'

    $element.css 'height', 'auto'
    $element.css 'max-height', 'none'

    if classToToggle
      childrenWithClass = $element.find('.' + classToToggle)
      childrenWithClass.removeClass classToToggle

    $element.removeClass classToToggle if classToToggle

    $element.css 'max-height', $element.height() + 'px'

    if $element.attr('retain-class') == 'true'
      $element.addClass classToToggle if classToToggle
      childrenWithClass.addClass classToToggle if childrenWithClass

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
  scope:
    retainClass: '@retainClass'

dir.$inject = ['$window']

angular.module('appirio-tech-ng-ui-components').directive 'lockHeight', dir

