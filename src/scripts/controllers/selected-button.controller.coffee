'use strict'

SelectedButtonController = ($scope) ->
  vm           = this
  vm.avatarUrl = null

  value = ->
    return true if $scope.value == 'true'
    return false if $scope.value == 'false'
    return $scope.value

  vm.toggle = ->
    if vm.isSelected()
      $scope.ngModel = undefined
    else if $scope.value
      $scope.ngModel = value()
    else
      $scope.ngModel = true

  vm.isSelected = ->
    if $scope.value
      $scope.ngModel == value()
    else
      $scope.ngModel

  activate = ->
    vm

  activate()

SelectedButtonController.$inject = ['$scope']

angular.module('appirio-tech-ng-ui-components').controller 'SelectedButtonController', SelectedButtonController