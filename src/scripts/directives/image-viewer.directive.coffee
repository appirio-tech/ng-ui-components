'use strict'

directive = ->
  link = (scope, element, attrs) ->
      checkHeights = ->
        container = $('.img-container')
        backgroundContainer = $('.bg-image')[0]
        containerHeight = container.height()
        containerWidth = container.width()

        image  = container.find('img')
        imageHeight = image.attr('height')
        imageWidth = image.attr('width')

        if imageHeight > 0 && imageWidth > 0
          if imageHeight < containerHeight && imageWidth < containerWidth
            scope.showSmallImage = true
          else
            scope.showSmallImage = false

      scope.$watch 'setAutoBg', (newVal, oldVal) ->
        if newVal
          scope.setAutoBg = false
          checkHeights()

  restrict:    'E'
  controller:  'ImageViewerController as vm'
  templateUrl: 'views/image-viewer.directive.html'
  link: link
  scope:
    files             : '='
    startingFile      : '='
    showNotifications : '='
    onFileChange      : '&'

angular.module('appirio-tech-ng-ui-components').directive 'imageSlideViewer', directive