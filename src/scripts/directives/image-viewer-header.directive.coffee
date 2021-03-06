'use strict'

dir = ->
  restrict   : 'E'
  templateUrl: 'views/image-viewer-header.directive.html'
  controller : 'ImageViewerHeaderController as vm'
  scope:
    avatar : '@'
    handle : '@'
    title  : '@'
    hideUserInfo: '='
    commentsAllowed : '='
    downloadAllowed : '='
    downloadUrl     : '='
    toggleComments: '&'


dir.$inject = []

angular.module('appirio-tech-ng-ui-components').directive 'imageViewerHeader', dir