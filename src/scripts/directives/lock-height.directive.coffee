'use strict';

dir = ($window, $timeout) ->
  elements = []

  lockHeight = ($element) ->
    attr          = $element.attr 'lock-height'
    classToToggle = attr if attr != 'lock-height'
    ignoreContent = $element.attr('ignore-content')?.length

    $element.css 'height', 'auto'
    $element.css 'max-height', 'none'
    $element.addClass 'lock-height'
    $element.addClass 'ignore-content' if ignoreContent

    if classToToggle
      childrenWithClass = $element.find('.' + classToToggle)
      childrenWithClass.removeClass classToToggle

    $element.removeClass classToToggle if classToToggle

    $element.css 'max-height', $element.height() + 'px'

    if $element.attr('retain-class') == 'true'
      $element.addClass classToToggle if classToToggle
      childrenWithClass.addClass classToToggle if childrenWithClass

    $element.removeClass 'ignore-content' if ignoreContent

  $($window).bind 'resize', ->
    for element in elements
      lockHeight element

  link = (scope, element, attrs) ->
    elements.push $(element[0])

    element.ready -> # allow dom to render
      lockHeight $(element[0])

      scope.$watch 'refresh', -> # watch for data changes
        if scope.refresh
          callback = ->
            lockHeight $(element[0])

          $timeout callback, 0, false # run after digest cycle

  restrict: 'A'
  link    : link
  priority: -1
  scope:
    retainClass: '@'
    ignoreContent: '@'
    refresh: '@'

dir.$inject = ['$window', '$timeout']

angular.module('appirio-tech-ng-ui-components').directive 'lockHeight', dir

