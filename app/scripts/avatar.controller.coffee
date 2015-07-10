'use strict'

AvatarController = ($scope) ->
  vm        = this
  vm.avatarUrl = null

  activate = ->
    $scope.$watch 'avatarUrl', ->
      vm.avatarUrl = $scope.avatarUrl

  activate()

AvatarController.$inject = ['$scope']

angular.module('appirio-tech-ui-components').controller 'AvatarController', AvatarController