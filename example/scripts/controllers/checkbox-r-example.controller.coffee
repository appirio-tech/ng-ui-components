'use strict'

ctrl = ($scope) ->
  vm       = this
  vm.value = false
  vm.label = 'Show me the money'

  vm.onChange =  ->
    vm.value = !vm.value

  activate = ->
    vm

  activate()

ctrl.$inject = ['$scope']

angular.module('example').controller 'CheckboxRExampleController', ctrl