'use strict'

LockHeightExampleController = ($scope) ->
  vm        = this
  vm.height = '500px'

  activate = ->
    vm

  activate()

LockHeightExampleController.$inject = ['$scope']

angular.module('example').controller 'LockHeightExampleController', LockHeightExampleController