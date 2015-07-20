'use strict'

AvatarController = ($scope) ->
  vm           = this
  vm.avatarUrl = null

  activate = ->
    $scope.$watch 'avatarUrl', ->
      vm.avatarUrl = $scope.avatarUrl if $scope.avatarUrl

    vm

  activate()

AvatarController.$inject = ['$scope']

angular.module('appirio-tech-ng-ui-components').controller 'AvatarController', AvatarController