'use strict'

ctrl = ($scope) ->
  vm       = this
  vm.value = false
  vm.label = 'Show me the money'

  vm.onChange = (checked) ->
    vm.value = checked

  activate = ->
    vm

  activate()

ctrl.$inject = ['$scope']

angular.module('example').controller 'CheckboxRExampleController', ctrl