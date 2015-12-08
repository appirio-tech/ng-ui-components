'use strict'

ImageViewerExampleController = ($scope, $stateParams) ->
  vm       = this
  vm.value = false
  vm.userHandle = "batman"
  vm.userAvatar = "http://www.topcoder.com/i/m/cardiboy_big.jpg"
  vm.startingId = $stateParams.id
  vm.files = [
    {
      fileId: "abc",
      path: "work/1447877190406-e9c02ed7-00bf-4e52-8c57-4d73fec009ac/9be085da-2013-44e9-8701-507a03c6716e/Screen Shot 2015-12-01 at 1.13.17 PM.png",
      caption: ";loh;olhi/p'olj",
      url: "http://petdogss.com/wp-content/uploads/2015/01/attention-seeking-puppy.jpg"
    },
    {
      fileId: "def",
      path: "work/1447877190406-e9c02ed7-00bf-4e52-8c57-4d73fec009ac/cff190d6-c11e-4a42-ab32-9ea37f163334/Screen Shot 2015-12-01 at 1.13.17 PM.png",
      caption: "sDF",
      url: "http://typesofflower.com/wp-content/uploads/2015/01/hibiscus-flower-changing-colors.jpg"
    },
    {
      fileId: "ghi",
      path: "work/1447877190406-e9c02ed7-00bf-4e52-8c57-4d73fec009ac/88e9df7c-96d2-482f-936d-a5dece0c67bf/Screen Shot 2015-12-01 at 1.01.35 PM.png",
      caption: "ASDF"
      url: "http://petdogss.com/wp-content/uploads/2015/01/attention-seeking-puppy.jpg"
    },
    {
      fileId: "klm",
      path: "work/1447877190406-e9c02ed7-00bf-4e52-8c57-4d73fec009ac/fe819b7d-2534-4878-994b-35f7b2fec185/Screen Shot 2015-12-01 at 12.35.18 PM.png",
      caption: "ASDFASDF",
      url: "http://typesofflower.com/wp-content/uploads/2015/01/hibiscus-flower-changing-colors.jpg"
    }
  ]

  activate = ->
    vm

  activate()

ImageViewerExampleController.$inject = ['$scope', '$stateParams']

angular.module('example').controller 'ImageViewerExampleController', ImageViewerExampleController