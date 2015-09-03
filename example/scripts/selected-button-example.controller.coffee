'use strict'

SelectedButtonExampleController = ($scope) ->
  vm       = this
  vm.value = undefined

  activate = ->
    vm

  activate()

SelectedButtonExampleController.$inject = ['$scope']

angular.module('appirio-tech-ng-ui-components').controller 'SelectedButtonExampleController', SelectedButtonExampleController