'use strict'

CheckboxExampleController = ($scope) ->
  vm       = this
  vm.value = false

  activate = ->
    vm

  activate()

CheckboxExampleController.$inject = ['$scope']

angular.module('appirio-tech-ng-ui-components').controller 'CheckboxExampleController', CheckboxExampleController