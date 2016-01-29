'use strict'

store =
  subscribe: ->
  dispatch: ->
  getState: ->

ProviderExampleController = ($scope) ->
  vm       = this
  vm.value = false
  vm.store = store
  vm.label = 'show me the money'

  activate = ->
    vm

  activate()

ProviderExampleController.$inject = ['$scope']

angular.module('example').controller 'ProviderExampleController', ProviderExampleController