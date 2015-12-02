'use strict'

DateInputExampleController = ($scope) ->
  vm       = this
  vm.date  = '2015-12-01'

  activate = ->
    vm

  activate()

DateInputExampleController.$inject = ['$scope']

angular.module('example').controller 'DateInputExampleController', DateInputExampleController