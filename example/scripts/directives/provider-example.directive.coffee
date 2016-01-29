'use strict'

Provider = require '../../../components/Provider/Provider'
Checkbox = require '../../../components/Checkbox/Checkbox.cjsx'

directive = (reactDirective) ->
  reactDirective Provider(Checkbox)

directive.$inject = ['reactDirective']

angular.module('example').directive 'providerExample', directive
