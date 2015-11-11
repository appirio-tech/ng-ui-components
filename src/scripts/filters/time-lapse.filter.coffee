'use strict'

filter = ->
  (createdAt, hideSuffix=false) ->
    moment(createdAt).fromNow(hideSuffix)

angular.module('appirio-tech-ng-ui-components').filter 'timeLapse', filter
