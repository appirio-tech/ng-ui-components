'use strict';

dir = ($window, $rootScope) ->
  viewPortHeight = 0
  elements = []

  setViewPortHeight = ->
    viewPortHeight = $($window).height()

    viewPortHeight

  setViewPortHeight()

  fullHeight = ($element) ->
    $element.height viewPortHeight

  $($window).bind 'resize', ->
    setViewPortHeight()

    for element in elements
      fullHeight element

  link = (scope, element, attrs) ->
    elements.push $(element[0])

    fullHeight $(element[0])

  restrict: 'A'
  link: link

dir.$inject = ['$window', '$rootScope']

angular.module('appirio-tech-ng-ui-components').directive 'fullHeight', dir

