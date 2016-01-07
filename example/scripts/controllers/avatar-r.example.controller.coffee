'use strict'

ctrl = ($scope) ->
  vm       = this
  vm.url  = 'http://www.topcoder.com/i/m/cardiboy_big.jpg'

  activate = ->
    vm

  activate()

ctrl.$inject = ['$scope']

angular.module('example').controller 'AvatarRExampleController', ctrl