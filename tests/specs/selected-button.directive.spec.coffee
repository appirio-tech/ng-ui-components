'use strict'

element = null
html    = '<selected-button ng-model="vm.value"></selected-button>'

describe 'Selected Box Directive', ->
  beforeEach inject ($compile, $rootScope) ->
    compiled = $compile html
    element  = compiled $rootScope

    $rootScope.$digest()

  it 'element should have some html', ->
    expect(element.length).to.be.ok