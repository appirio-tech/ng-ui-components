'use strict'

ImageViewerHeaderController = ($scope) ->
  vm = this
  vm.avatar = $scope.avatar
  vm.handle = $scope.handle
  vm.title = $scope.title
  vm.commentsAllowed = $scope.commentsAllowed
  vm.downloadAllowed = $scope.downloadAllowed
  vm.toggleComments = $scope.toggleComments

  vm.generateProfileUrl = (handle) ->
    "https://www.topcoder.com/members/#{handle}"

  activate = ->

    vm

  activate()

ImageViewerHeaderController.$inject = ['$scope']

angular.module('appirio-tech-ng-ui-components').controller 'ImageViewerHeaderController', ImageViewerHeaderController