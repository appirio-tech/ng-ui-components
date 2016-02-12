'use strict'

directive = ($window)->
  link = (scope) ->
    container = document.getElementsByClassName('image-container')[0]
    image = document.getElementsByClassName('preview-image')[0]

    checkOverflow = ->
      wide = image.naturalWidth > container.clientWidth
      tall = image.naturalHeight > container.clientHeight

      scope.$apply "vm.largeImage = #{ wide || tall }"

    image.onload = ->
      checkOverflow()

    $($window).bind 'resize', ->
      checkOverflow()

  restrict:    'E'
  controller:  'ImageViewerController as vm'
  templateUrl: 'views/image-viewer.directive.html'
  link: link
  scope: {}
  bindToController:
    files             : '='
    startingFile      : '='
    showNotifications : '&'
    onFileChange      : '&'

directive.$inject = ['$window']

angular.module('appirio-tech-ng-ui-components').directive 'imageSlideViewer', directive