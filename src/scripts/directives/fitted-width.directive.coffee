'use strict'

getBiggestLeft = (elements) ->
  biggestLeft = null

  for element in elements
    unless biggestLeft
      biggestLeft = $(element)
    else if $(element).position().left > biggestLeft.position().left
      biggestLeft = $(element)

  biggestLeft

dir = ($window) ->
  watchElements = []

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
    for element in watchElements
      fittedWidth element

  link = (scope, element, attrs) ->
    element.ready ->
      if scope.$last == undefined
        watchElements.push $(element[0])
        fittedWidth $(element[0])
      else if scope.$last # handle ng-repeat
        parent = $(element[0]).parent()

        watchElements.push parent
        fittedWidth parent

  restrict: 'A'
  link: link

dir.$inject = ['$window']

angular.module('appirio-tech-ng-ui-components').directive 'fittedWidth', dir

