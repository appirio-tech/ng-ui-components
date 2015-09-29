'use strict'

SelectedButtonExampleController = ($scope) ->
  vm         = this
  vm.value   = undefined
  vm.fruits  = []
  vm.apples  = 'apples'
  vm.oranges = 'oranges'
  vm.mangos  = 'mangos'

  activate = ->
    vm

  activate()

SelectedButtonExampleController.$inject = ['$scope']

angular.module('example').controller 'SelectedButtonExampleController', SelectedButtonExampleController