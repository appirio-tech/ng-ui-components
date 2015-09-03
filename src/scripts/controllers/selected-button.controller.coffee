'use strict'

removeFromArray = (items, lookFor) ->
  newItems = []

  for item in items
    newItems.push item unless item == lookFor

  newItems

SelectedButtonController = ($scope) ->
  vm           = this
  vm.avatarUrl = null

  toggleArray = ->
    if vm.isSelected()
      $scope.ngModel = removeFromArray $scope.ngModel, $scope.value
    else
      $scope.ngModel.push $scope.value

  isArrayModel = ->
    $scope.ngModel?.push && $scope.value

  vm.toggle = ->
    if isArrayModel()
      toggleArray()
    else
      if vm.isSelected()
        $scope.ngModel = undefined
      else if $scope.value != undefined
        $scope.ngModel = $scope.value
      else
        $scope.ngModel = true

  vm.isSelected = ->
    if isArrayModel()
      $scope.ngModel.indexOf($scope.value) != -1
    else
      if $scope.value != undefined
        $scope.ngModel == $scope.value
      else
        $scope.ngModel

  activate = ->
    vm

  activate()

SelectedButtonController.$inject = ['$scope']

angular.module('appirio-tech-ng-ui-components').controller 'SelectedButtonController', SelectedButtonController