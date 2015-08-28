'use strict'

SelectedButtonController = ($scope) ->
  vm           = this
  vm.avatarUrl = null

  vm.toggle = ->
    $scope.ngModel = !$scope.ngModel

  activate = ->

    vm

  activate()

SelectedButtonController.$inject = ['$scope']

angular.module('appirio-tech-ng-ui-components').controller 'SelectedButtonController', SelectedButtonController