'use strict'

filter = ->
  (number) ->
    ordinalMap =
      1: '1st'
      2: '2nd'
      3: '3rd'

    ordinalMap[number]

angular.module('appirio-tech-ng-ui-components').filter 'ordinalNumber', filter