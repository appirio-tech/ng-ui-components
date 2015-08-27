'use strict'

CheckboxController = ($scope) ->
  vm           = this
  vm.avatarUrl = null

  vm.toggle = ->
    $scope.ngModel = !$scope.ngModel

  activate = ->

    vm

  activate()

CheckboxController.$inject = ['$scope']

angular.module('appirio-tech-ng-ui-components').controller 'CheckboxController', CheckboxController