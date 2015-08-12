'use strict'

filter = ->
  (createdAt) ->
    moment(createdAt).fromNow()

angular.module('appirio-tech-ng-ui-components').filter 'timeLapse', filter
