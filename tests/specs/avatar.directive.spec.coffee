'use strict'

element = null
html    = '<avatar avatar-url="123"></avatar>'

describe 'AvatarDirective', ->
  beforeEach inject ($compile, $rootScope) ->
    compiled = $compile html
    element  = compiled $rootScope

    $rootScope.$digest()

  it 'element should have some html', ->
    expect(element.length).to.be.ok