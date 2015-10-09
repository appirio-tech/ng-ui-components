'use strict';

dir = ($window) ->
  viewPortHeight = 0
  elements = []

  setViewPortHeight = ->
    viewPortHeight = $($window).height()

    viewPortHeight

  setViewPortHeight()

  fullHeight = ($element) ->
    $element.css('min-height', viewPortHeight + 'px')
    $element.css('height', viewPortHeight + 'px') # for ie flex grow bug

  $($window).bind 'resize', ->
    setViewPortHeight()

    for element in elements
      fullHeight element

  link = (scope, element, attrs) ->
    elements.push $(element[0])

    element.ready ->
      fullHeight $(element[0])

  restrict: 'A'
  link: link

dir.$inject = ['$window']

angular.module('appirio-tech-ng-ui-components').directive 'fullHeight', dir

