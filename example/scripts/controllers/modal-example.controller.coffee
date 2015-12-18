'use strict'

ModalExampleController = ($scope) ->
  vm      = this
  vm.show = false

  activate = ->
    vm

  activate()

ModalExampleController.$inject = ['$scope']

angular.module('example').controller 'ModalExampleController', ModalExampleController