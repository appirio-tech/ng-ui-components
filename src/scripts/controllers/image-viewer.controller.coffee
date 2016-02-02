'use strict'

ImageViewerController = ($scope) ->
  vm                   = this
  vm.files             = $scope.files
  vm.showNotifications = $scope.showNotifications
  startingFile         = $scope.startingFile
  vm.onFileChange      = $scope.onFileChange
  vm.prevFile          = null
  vm.nextFile          = null
  vm.imageZoomedIn     = false
  $scope.setAutoBg     = false
  vm.showSmallImage = false

  updateFiles = ->
    if vm.currentIndex + 1 < vm.files.length
      vm.nextFile = true
    else
      vm.nextFile = null

    if vm.currentIndex - 1 >= 0
      vm.prevFile = true
    else
      vm.prevFile = null

  activate =  ->
    vm.file       = startingFile

    vm.currentIndex = vm.files.indexOf vm.file

    vm.nextFile = vm.currentIndex + 1 < vm.files.length

    vm.prevFile =  vm.currentIndex - 1 >= 0

    vm.onFileChange({file: vm.file}) if vm.onFileChange

    $scope.setAutoBg = true

    $scope.$watch 'showSmallImage', (newVal, OldVal) ->
      vm.showSmallImage = newVal

  vm.viewNext = ->
    vm.file = vm.files[vm.currentIndex + 1]

    vm.currentIndex = vm.files.indexOf vm.file

    updateFiles()

    vm.imageZoomedIn = false

    vm.onFileChange({file: vm.file}) if vm.onFileChange

    $scope.setAutoBg = true



  vm.viewPrevious = ->
    vm.file = vm.files[vm.currentIndex - 1]

    vm.currentIndex = vm.files.indexOf vm.file

    updateFiles()

    vm.imageZoomedIn = false

    vm.onFileChange({file: vm.file}) if vm.onFileChange

    $scope.setAutoBg = true


  vm.selectFile = (file) ->
    vm.file = file

    vm.currentIndex = vm.files.indexOf vm.file

    updateFiles()

    vm.imageZoomedIn = false

    vm.onFileChange({file: vm.file}) if vm.onFileChange

    $scope.setAutoBg = true


  vm.isCurrent = (file) ->
    (vm.files.indexOf file) == vm.currentIndex

  vm.toggleZoom = ->
    vm.imageZoomedIn = !vm.imageZoomedIn

  activate()

  vm

ImageViewerController.$inject = ['$scope']

angular.module('appirio-tech-ng-ui-components').controller 'ImageViewerController', ImageViewerController