'use strict'

ImageViewerController = ($scope, $state) ->
  vm                 = this
  vm.files           = $scope.files
  vm.userAvatar      = $scope.userAvatar
  vm.userHandle      = $scope.userHandle
  startingId         = $scope.startingId
  vm.commentsAllowed = $scope.commentsAllowed

  activate =  ->
    vm.file       = vm.files.filter((file) -> file.id == startingId || file.fileId == startingId)[0]
    vm.file.isCurrent = true

    vm.files.forEach (file) ->
      if file.id
        file.detailUrl = $state.href 'image-viewer',
          id       : file.id
      else if file.fileId
        file.detailUrl = $state.href 'image-viewer',
          id       : file.fileId

    currentIndex = vm.files.indexOf(vm.file)

    if currentIndex > 0
      vm.prevFile = vm.files[currentIndex - 1]

    if currentIndex + 1 < vm.files.length
      vm.nextFile = vm.files[currentIndex + 1]

  vm.generateProfileUrl = (handle) ->
    "https://www.topcoder.com/members/#{handle}"

  activate()

  vm

ImageViewerController.$inject = ['$scope', '$state']

angular.module('appirio-tech-ng-ui-components').controller 'ImageViewerController', ImageViewerController