'use strict'

CheckboxExampleController = ($scope) ->
  vm       = this
  vm.value = false

  activate = ->
    vm

  activate()

CheckboxExampleController.$inject = ['$scope']

angular.module('example').controller 'CheckboxExampleController', CheckboxExampleController