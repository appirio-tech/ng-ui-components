'use strict'

directive = ->
  restrict:    'E'
  controller:  'ImageViewerController as vm'
  templateUrl: 'views/image-viewer.directive.html'
  scope:
    files:           '='
    startingId:      '@'
    userAvatar:      '@'
    userHandle:      '@'
    commentsAllowed: '@'

angular.module('appirio-tech-ng-ui-components').directive 'imageViewer', directive