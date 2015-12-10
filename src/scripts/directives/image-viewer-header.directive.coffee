'use strict'

dir = ->
  restrict   : 'E'
  templateUrl: 'views/image-viewer-header.directive.html'
  controller : 'ImageViewerHeaderController as vm'
  scope:
    avatar : '@'
    handle : '@'
    title  : '@'
    commentsAllowed : '@'
    downloadAllowed : '@'
    toggleComments: '&'


dir.$inject = []

angular.module('appirio-tech-ng-ui-components').directive 'imageViewerHeader', dir