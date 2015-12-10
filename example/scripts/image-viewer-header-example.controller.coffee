'use strict'

ImageViewerHeaderExampleController = ($scope) ->
  vm = this
  vm.avatar = "http://www.topcoder.com/i/m/cardiboy_big.jpg"
  vm.handle = "Darth Vader"

  vm.toggleComments = ->
    alert('comment toggled')

  activate = ->

    vm

  activate()

ImageViewerHeaderExampleController.$inject = ['$scope']

angular.module('appirio-tech-ng-ui-components').controller 'ImageViewerHeaderExampleController', ImageViewerHeaderExampleController