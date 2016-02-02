'use strict'

directive = ->
  link = (scope, element, attrs) ->
      angular.element(document).ready ->
        container = $('.img-container')
        backgroundContainer = $('.bg-image')
        containerHeight = container.height()
        containerWidth = container.width()

        image  = container.find('img')
        imageHeight = image.attr('height')
        imageWidth = image.attr('width')

        if imageHeight < containerHeight && imageWidth < containerWidth
          backgroundContainer.addClass('auto-bg')



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