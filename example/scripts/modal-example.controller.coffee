'use strict'

ModalExampleController = ($scope) ->
  vm      = this
  vm.show = false

  activate = ->
    vm

  activate()

ModalExampleController.$inject = ['$scope']

angular.module('appirio-tech-ng-ui-components').controller 'ModalExampleController', ModalExampleController