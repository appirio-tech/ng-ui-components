'use strict'

element = null
html    = '<countdown end="2015-08-14T00:55:38.152Z"></countdown>'

describe 'CountdownDirective', ->
  beforeEach inject ($compile, $rootScope) ->
    compiled = $compile html
    element  = compiled $rootScope

    $rootScope.$digest()

  it 'element should have some html', ->
    expect(element.length).to.be.ok