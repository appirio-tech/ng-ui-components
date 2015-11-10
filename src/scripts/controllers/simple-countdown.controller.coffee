'use strict'

SimpleCountdownController = ($scope) ->
  vm         = this
  timeRemaining = 0

  activate = ->
    $scope.$watch 'end', (newValue) ->
      vm.timeRemaining = moment(newValue).fromNow(true)

    vm

  activate()

SimpleCountdownController.$inject = ['$scope']

angular.module('appirio-tech-ng-ui-components').controller 'SimpleCountdownController', SimpleCountdownController