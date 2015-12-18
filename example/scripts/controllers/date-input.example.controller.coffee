'use strict'

DateInputExampleController = ($scope) ->
  vm             = this
  vm.date        = '2015-12-01'
  vm.isDateValid = true
  vm.date2       = null

  activate = ->
    vm

  activate()

DateInputExampleController.$inject = ['$scope']

angular.module('example').controller 'DateInputExampleController', DateInputExampleController