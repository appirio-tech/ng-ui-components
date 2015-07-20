'use strict'

directive = ->
  restrict    : 'E'
  templateUrl : 'views/avatar.directive.html'
  controller  : 'AvatarController'
  controllerAs: 'vm'
  scope       :
    avatarUrl: '@avatarUrl'

angular.module('appirio-tech-ng-ui-components').directive 'avatar', directive

