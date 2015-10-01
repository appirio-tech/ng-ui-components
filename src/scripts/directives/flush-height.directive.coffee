'use strict';

dir = ($window, $rootScope) ->
  viewPortHeight = 0
  elements = []

  setViewPortHeight = ->
    viewPortHeight = $($window).height()

    viewPortHeight

  setViewPortHeight()

  flushHeight = ($element) ->
    top        = $element[0]?.getBoundingClientRect()?.top
    heightDiff = viewPortHeight - top

    $element.height heightDiff

  $($window).bind 'resize', ->
    setViewPortHeight()

    for element in elements
      flushHeight element

  link = (scope, element, attrs) ->
    elements.push $(element[0])

    flushHeight $(element[0])

  restrict: 'A'
  link: link

dir.$inject = ['$window', '$rootScope']

angular.module('appirio-tech-ng-ui-components').directive 'flushHeight', dir

