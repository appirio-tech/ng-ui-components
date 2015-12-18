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

  vm.onChange = (changeTo) ->
    vm.currentColor = changeTo?.value

  activate = ->
    vm

  activate()

controller.$inject = ['$scope']

angular.module('example').controller 'DropdownExampleController', controller