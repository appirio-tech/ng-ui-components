'use strict'

controller = ($scope) ->
  vm              = this
  vm.currentColor = 'RED'
  vm.colors = [
    label: 'Red'
    value: 'RED'
  ,
    label: 'Green'
    value : 'GREEN'
  ,
    label: 'Blue'
    value: 'BLUE'
  ]

  activate = ->
    vm

  activate()

controller.$inject = ['$scope']

angular.module('example').controller 'DropdownExampleController', controller