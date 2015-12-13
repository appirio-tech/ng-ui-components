'use strict'

ImageViewerController = ($scope) ->
  vm                   = this
  vm.files             = $scope.files
  vm.showNotifications = $scope.showNotifications
  startingFile         = $scope.startingFile
  vm.onFileChange      = $scope.onFileChange
  vm.prevFile          = null
  vm.nextFile          = null

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

  vm.viewNext = ->
    vm.file = vm.files[vm.currentIndex + 1]

    vm.currentIndex = vm.files.indexOf vm.file

    updateFiles()

    vm.onFileChange({file: vm.file}) if vm.onFileChange


  vm.viewPrevious = ->
    vm.file = vm.files[vm.currentIndex - 1]

    vm.currentIndex = vm.files.indexOf vm.file

    updateFiles()

    vm.onFileChange({file: vm.file}) if vm.onFileChange

  vm.isCurrent = (file) ->
    vm.files.indexOf file == vm.currentIndex

  activate()

  vm

ImageViewerController.$inject = ['$scope']

angular.module('appirio-tech-ng-ui-components').controller 'ImageViewerController', ImageViewerController