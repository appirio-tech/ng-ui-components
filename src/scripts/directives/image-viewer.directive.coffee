'use strict'

directive = ->
  restrict:    'E'
  controller:  'ImageViewerController as vm'
  templateUrl: 'views/image-viewer.directive.html'
  scope:
    files:           '='
    startingFile:    '='
    showNotifications: '@'

angular.module('appirio-tech-ng-ui-components').directive 'imageSlideViewer', directive