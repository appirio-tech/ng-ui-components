'use strict'

scope = null
vm    = null

describe 'Selected button controller', ->
  context 'when ngModel is false', ->
    beforeEach inject ($rootScope, $controller) ->
      scope         = $rootScope.$new()
      scope.ngModel = false
      vm            = $controller 'SelectedButtonController', $scope: scope

    describe 'vm.toggle()', ->
      beforeEach ->
        vm.toggle()

      it 'should have batman', ->
        expect(scope.ngModel).to.be.ok

    describe 'vm.isSelected()', ->
      context 'before toggle', ->
        it 'should return false', ->
          expect(vm.isSelected()).to.not.be.ok

      context 'after toggle', ->
        beforeEach ->
          vm.toggle()

        it 'should return true', ->
          expect(vm.isSelected()).to.be.ok

  context 'when ngModel is an array', ->
    beforeEach inject ($rootScope, $controller) ->
      scope         = $rootScope.$new()
      scope.ngModel = []
      scope.value   = 'batman'
      vm            = $controller 'SelectedButtonController', $scope: scope

    describe 'vm.toggle()', ->
      beforeEach ->
        vm.toggle()

      it 'should have batman', ->
        expect(scope.ngModel[0]).to.be.equal 'batman'

    describe 'vm.isSelected()', ->
      context 'before toggle', ->
        it 'should return false', ->
          expect(vm.isSelected()).to.not.be.ok

      context 'after toggle', ->
        beforeEach ->
          vm.toggle()

        it 'should return true', ->
          expect(vm.isSelected()).to.be.ok
