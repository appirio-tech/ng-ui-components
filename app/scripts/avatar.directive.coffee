'use strict'

directive = (UserAPIService) ->


  directive.$inject = ['UserAPIService']

  restrict   : 'E'
  templateUrl: 'views/avatar.directive.html'
  link       : link
