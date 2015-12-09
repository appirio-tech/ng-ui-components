'use strict'

dir = ->
  restrict   : 'E'
  templateUrl: 'views/image-viewer-container.directive.html'
  controller : 'ImageViewerContainerController as vm'
  scope:
    type: '@'

dir.$inject = []

angular.module('appirio-tech-ng-work-layout').directive 'imageViewerContainer', dir