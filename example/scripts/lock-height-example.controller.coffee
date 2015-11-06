'use strict'

LockHeightExampleController = ($scope) ->
  vm      = this
  vm.show = false

  activate = ->
    vm

  activate()

LockHeightExampleController.$inject = ['$scope']

angular.module('example').controller 'LockHeightExampleController', LockHeightExampleController