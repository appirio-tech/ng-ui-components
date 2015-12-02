'use strict'

DateInputController = ($scope) ->
  vm = this

  activate = ->
    $scope.$watch 'date', (newValue, oldValue) ->
      $scope.isValid = false

      $scope.isValid = true if newValue?.length

    vm

  activate()

DateInputController.$inject = ['$scope']

angular.module('appirio-tech-ng-ui-components').controller 'DateInputController', DateInputController