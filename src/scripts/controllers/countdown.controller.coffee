'use strict'

CountdownController = ($scope) ->
  vm         = this
  vm.days    = 0
  vm.hours   = 0
  vm.minutes = 0
  vm.seconds = 0

  activate = ->
    $scope.$watch 'end', ->
      now        = moment()
      end        = new Date($scope.end)
      diff       = moment(end).diff now
      duration   = moment.duration diff

      vm.days    = duration.days()
      vm.hours   = duration.hours()
      vm.minutes = duration.minutes()
      vm.seconds = duration.seconds()

    vm

  activate()

CountdownController.$inject = ['$scope']

angular.module('appirio-tech-ng-ui-components').controller 'CountdownController', CountdownController