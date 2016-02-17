'use strict'

ImageViewerController = ->
  vm                   = this
  vm.zoom              = false
  vm.prevFile          = false
  vm.nextFile          = false
  vm.largeImage        = false

  activate =  ->
    update(vm.files.indexOf vm.startingFile)

  update = (fileIndex) ->
    vm.file         = vm.files[fileIndex]
    vm.currentIndex = fileIndex
    vm.nextFile     = vm.currentIndex + 1 < vm.files.length
    vm.prevFile     = vm.currentIndex > 0
    vm.zoom         = false

    vm.onFileChange({file: vm.file}) if vm.onFileChange

  vm.viewNext = ->
    update(vm.currentIndex + 1)

  vm.viewPrevious = ->
    update(vm.currentIndex - 1)

  vm.selectFile = (file) ->
    update(vm.files.indexOf file)

  vm.isCurrent = (file) ->
    (vm.files.indexOf file) == vm.currentIndex

  vm.toggleZoom = ->
    vm.zoom = !vm.zoom

  activate()

  vm

angular.module('appirio-tech-ng-ui-components').controller 'ImageViewerController', ImageViewerController