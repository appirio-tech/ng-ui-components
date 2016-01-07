'use strict'

Avatar = require '../elements/Avatar/Avatar.cjsx'

directive = (reactDirective) ->
  reactDirective Avatar

directive.$inject = ['reactDirective']

angular.module('appirio-tech-ng-ui-components').directive 'avatarR', directive

