'use strict'

directive = (UserAPIService) ->

  restrict   : 'E'
  templateUrl: 'views/avatar.directive.html'
  scope      :
    avatarUrl: '@avatarUrl'

directive.$inject = ['UserAPIService']

angular.module('appirio-tech-ng-ui-components').directive 'avatar', directive

