'use strict'

getBiggestLeft = (elements) ->
  biggestLeft = null

  for element in elements
    unless biggestLeft
      biggestLeft = $(element)
    else if $(element).position().left > biggestLeft.position().left
      biggestLeft = $(element)

  biggestLeft

dir = ($window, $timeout) ->
  elements = []

  fittedWidth = ($element) ->
    $element.css 'width', '100%'

    biggestLeft = getBiggestLeft $element.children()

    if biggestLeft
      newWidth = biggestLeft.position().left
      newWidth -= $element.position().left
      newWidth += parseInt biggestLeft.css('margin-left')
      newWidth += biggestLeft.width()
      newWidth += parseInt biggestLeft.css('margin-right')
      newWidth += parseInt $element.css('padding-right')

      $element.css 'width', newWidth + 'px'

  $($window).bind 'resize', ->
    for element in elements
      fittedWidth element

  link = (scope, element, attrs) ->
    elements.push $(element[0])

    $timeout ->
      fittedWidth $(element[0])

    # element.ready ->
    #   fittedWidth $(element[0])

  restrict: 'A'
  link: link

dir.$inject = ['$window', '$timeout']

angular.module('appirio-tech-ng-ui-components').directive 'fittedWidth', dir

