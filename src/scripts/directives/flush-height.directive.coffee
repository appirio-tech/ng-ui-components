'use strict'

getOffsetTop = (elem) ->
  offsetTop = elem.offsetTop

  while elem = elem.offsetParent
    unless isNaN(elem.offsetTop)
      offsetTop += elem.offsetTop

  offsetTop

dir = ($window) ->
  viewPortHeight = 0
  elements = []

  setViewPortHeight = ->
    viewPortHeight = $($window).height()

    viewPortHeight

  setViewPortHeight()

  flushHeight = ($element) ->
    top = getOffsetTop $element[0]
    heightDiff = viewPortHeight - top

    $element.css('min-height', heightDiff + 'px')

  $($window).bind 'resize', ->
    setViewPortHeight()

    for element in elements
      flushHeight element

  link = (scope, element, attrs) ->
    elements.push $(element[0])

    element.ready ->
      flushHeight $(element[0])

  restrict: 'A'
  link: link

dir.$inject = ['$window']

angular.module('appirio-tech-ng-ui-components').directive 'flushHeight', dir

