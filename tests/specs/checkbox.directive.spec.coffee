'use strict'

element = null
html    = '<checkbox ng-model="vm.value"></checkbox>'

describe 'CheckBoxDirective', ->
  beforeEach inject ($compile, $rootScope) ->
    compiled = $compile html
    element  = compiled $rootScope

    $rootScope.$digest()

  it 'element should have some html', ->
    expect(element.length).to.be.ok